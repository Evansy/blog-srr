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
            <changyan :sid="aid"></changyan>
        </div>
    </div>
</template>

<script>
import { changyan } from '~/components';
import { articleDetail } from '~/assets/apis';

import highlight from "~/assets/directive/highlight";

export default {
    name: 'article-detail',
    scrollToTop: true,
    head: {
        link: [
            { rel: 'stylesheet', href: '//cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css' }
        ],
        script: [
            { src: '//cdn.bootcss.com/highlight.js/8.0/highlight.min.js' }
        ],
    },
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
            aid: +params.aid
        }
    },
    directives: {
        highlight
    },
    components: {
        changyan
    }
};
</script>

<style lang="less">
    @import '~assets/styles/views/detail';
</style>
