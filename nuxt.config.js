module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: "Evan's Blog",
        meta: [
            { charset: "utf-8" },
            { name: "renderer", content: "webkit" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            { name: "misapplication-tap-highlight", content: "no" },
            { name: "HandheldFriendly", content: "true" },
            { name: "MobileOptimized", content: "320" },
            // <!--忽略电话号码和email识别-->
            { name: "format-detection", content: "telephone=no" },
            { name: "format-detection", content: "email=no" },
            // <!--当网站添加到主屏幕快速启动方式，将网站添加到主屏幕快速启动方式-->
            { name: "apple-mobile-web-app-capable", content: "yes" },
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
            // <!-- UC默认竖屏 ，UC强制全屏 -->
            { name: "full-screen", content: "yes" },
            // <!-- UC应用模式 -->
            { name: "browsermode", content: "application" },
            // <!-- QQ强制竖屏 QQ强制全屏 -->
            { name: "x5-orientation", content: "portrait" },
            { name: "x5-fullscreen", content: "true" },
            { name: "x5-page-mode", content: "app" },

            {
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no,minimal-ui, viewport-fit=cover"
            },
            { hid: "description", name: "description", content: "Evan&apos;s Blog" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "dns-prefetch", href: "//bootcss.com/" },
            { rel: "dns-prefetch", href: "//alicdn.com/" },
            {
                rel: "stylesheet preload",
                href: "//cdn.bootcss.com/normalize/8.0.0/normalize.min.css",
                as: "style"
            },
            {
                rel: "stylesheet preload",
                href: "//at.alicdn.com/t/font_484739_f4p6lg316dzk6gvi.css",
                as: "style"
            }
        ]
    },

    // 页面上设置scrollToTop：true 未生效 如下示例生效
    router: {
        scrollBehavior: function (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else {
                let position = {};
                // 目标页面子组件少于两个
                if (to.matched.length < 2) {
                    // 滚动至页面顶部
                    position = { x: 0, y: 0 };
                } else if (
                    to.matched.some(r => r.components.default.options.scrollToTop)
                ) {
                    // 如果目标页面子组件中存在配置了scrollToTop为true
                    position = { x: 0, y: 0 };
                }
                // 如果目标页面的url有锚点, 则滚动至锚点所在的位置
                if (to.hash) {
                    position = { selector: to.hash };
                }
                return position;
            }
        }
    },

    transition: {
        name: "router-fade",
        mode: "out-in"
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: "#3B8070" },

    css: [{ src: "~assets/styles/common.less", lang: "less" }],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
