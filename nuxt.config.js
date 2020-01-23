module.exports = {
  // generate Error 안나게 하기 위함.
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'do do do',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { property: 'og:title', content: 'do do do' },
      { property: 'og:description', content: 'do it do it true' },
      { property: 'og:image', content: 'https://do5do.github.io/og-image.jpg' },
      { property: 'og:url', content: 'https://do5do.github.io/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
    //API_SERVER_ADDRESS: 'http://localhost:3000/'

    // mobile 확인용 (hollys 2층)
    //API_SERVER_ADDRESS: 'http://192.168.1.215:3333/'

    // mobile 확인용 (hollys 3층)
    //API_SERVER_ADDRESS: 'http://192.168.1.43:3333/'

    // mobile 확인용 (coffee bean 3층)
    //API_SERVER_ADDRESS: 'http://172.16.100.41:3333/'

    // mobile 확인용 (집)
    //API_SERVER_ADDRESS: 'http://192.168.0.6:3333/'

    // 배포용 Git Page
    API_SERVER_ADDRESS: 'https://do5do.github.io'
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
    {src: '~/plugins/vue-isotope.js', ssr: false},
    {src: '~/plugins/vue-awesome-swiper.js', ssr: false}
  ]
}
