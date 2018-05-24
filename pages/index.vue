<template>
  <section class="views-home">
        <!-- 首屏背景 BEIGN -->
        <firstPage></firstPage>
        <!-- 首屏背景 END -->
        
        <!-- 内容区域 BEGIN -->
        <div class="views-home-content container">
            <article-item v-for="(item, index) in articleDatas" :article-info="item" :key="index"></article-item>

            <!-- 加载更多 BEIGN -->
            <div class="loadmore-content tc" v-if="!allLoaded">
                <button class="btn btn-primary outline" type="button" @click="getArticleList">加载更多</button>
            </div>

            <line-through v-else message="没有更多文章了哦"></line-through>
            <!-- 加载更多 END -->
        </div>
        <!-- 内容区域 END -->

    </section>
</template>

<script>
import { articleItem, lineThrough, firstPage } from '~/components';

import { articleList } from '~/assets/apis';

export default {
  name: 'views-home',
  data(){
        return {
            articleDatas: [],
            allLoaded: false,
            pageIndex: 1,
            pageSize: 10
        }
    },
    async asyncData ({ params, error }) {
        const content = await articleList({
                params: {
                    payload: {
                        page: 1,
                        value: '全部',
                        limit: 10
                    }
                }
            });

        if(content && content.length > 0){
            return {
                articleDatas: content,
                allLoaded: content.length < 10,
                pageIndex: 2
            }
        }
    },
    components: {
        articleItem,
        firstPage,
        lineThrough
    },
    methods: {
        // 获取文章列表
        getArticleList(){
            articleList({
                params: {
                    payload: {
                        page: this.pageIndex,
                        value: '全部',
                        limit: this.pageSize
                    }
                }
            }).then(res => {
                if(res && res.length > 0){
                    this.articleDatas = this.articleDatas.concat(res);

                    if(res.length < 10){
                        this.allLoaded = true;
                    }

                    this.pageIndex++;                    
                }
            });
        },

        // 加载更多
        onLoadMore(){

        }
    }
};
</script>

<style lang="scss">
    @import '~assets/styles/views/home';
</style>
