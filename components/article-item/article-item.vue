<template>
    <article class="components-article-item">
        <div class="article-item-banner" :style="{backgroundImage: `url(${articleInfo.image ? articleInfo.image : require('assets/images/main-banner1.jpg')})`}">
            <h2 class="article-item-title">{{articleInfo.title}}</h2>
        </div>
        <div class="article-item-introduce">
            <p class="article-item-meta">
                <a class="article-item-category font-blue" href="javascript: void(0);">{{articleInfo.tags && articleInfo.tags[0]}}</a> / 
                <span class="article-item-time">{{time}}</span>
            </p>
            <div class="article-item-content">
                <p class="article-item-text">{{content}}</p>
                <nuxt-link :to="{path: '/detail/' + articleInfo.aid, params: {aid: articleInfo.aid}}" class="unl font-blue article-read-more">阅读全文</nuxt-link>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'article-item',
    props: {
        articleInfo: {
            type: Object
        }
    },
    computed: {
        content() {
            // 去掉所有html标签，并截取前120个字符串
            return this.articleInfo.content && this.articleInfo.content.replace(/<[^>]+>/g, '').substr(0, 120);
        },
        time() {
            return this.articleInfo.date && this.articleInfo.date.substr(0, 10);
        }
    }
}
</script>


<style lang="scss">
    @import './style';
</style>
