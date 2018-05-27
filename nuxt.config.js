module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Evan's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'misapplication-tap-highlight', content: 'no' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'MobileOptimized', content: '320' },
      // <!--忽略电话号码和email识别-->
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'email=no' },
      // <!--当网站添加到主屏幕快速启动方式，将网站添加到主屏幕快速启动方式-->
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      // <!-- UC默认竖屏 ，UC强制全屏 -->
      { name: 'full-screen', content: 'yes' },
      // <!-- UC应用模式 -->
      { name: 'browsermode', content: 'application' },
      // <!-- QQ强制竖屏 QQ强制全屏 -->
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'x5-page-mode', content: 'app' },

      { name: 'viewport', content: 'width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no,minimal-ui, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Evan&apos;s Blog' }
    ],
    link: [ 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.bootcss.com/normalize/8.0.0/normalize.min.css' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_484739_f4p6lg316dzk6gvi.css' }
    ]
  },

  transition: {
    name: 'router-fade',
    mode: 'out-in',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    { src: "~assets/styles/common.scss", lang: "scss" }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
