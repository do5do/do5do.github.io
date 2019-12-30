module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss'}
  ],
  /*
  ** Global Variables
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variable.scss'
    ]
  },
  // API 주소 전역 선언
  env: {
    API_SERVER_ADDRESS: 'http://localhost:3000/' // 사무실
    //API_SERVER_ADDRESS: 'http://192.168.0.6:3333/'  // 집

    // 배포용
    // API_SERVER_ADDRESS: 'https://do5do.github.io'  // Git Page
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1F4BE1' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/public/',
    vendor: [
      'axios'
    ],
  },
  plugins: [
    {src: '~/plugins/vue-isotope.js', ssr: false}
  ]
}
