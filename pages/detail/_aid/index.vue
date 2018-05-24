<template>
    <div class="article-detail">
        <div class="article-detail-header">
            <!-- <div class="article-header-bg"></div> -->
            <div class="article-header-info container">
                <h1 class="article-tile">{{content.title}}</h1>
                <span class="article-publish-time font-grey">{{content.date}}</span>
            </div>
        </div>
        <div class="article-detail-content container" v-html="content.content" v-highlight>
            
        </div>
        <div class="container">
            <keep-alive>
                <changyan v-if="loaded" :sid="aid"></changyan>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { changyan } from '~/components';
import { articleDetail } from '~/assets/apis';

export default {
    name: 'article-detail',
    data() {
        return{
            aid: null,
            loaded: false,
            content: {}
        }
    },
    async asyncData ({ params, error }) {
        let content = await articleDetail({aid: params.aid})
        
        return {
            content,
            loaded: true,
            aid: +params.aid
        }
    },
    directives: {
        highlight: function (el) {
            let blocks = el.querySelectorAll('pre code');
            blocks.forEach((block)=>{
                hljs.highlightBlock(block)
            });
        }
    },
    components: {
        changyan
    }
};
</script>

<style lang="scss">
    @import '~assets/styles/views/detail';
</style>
