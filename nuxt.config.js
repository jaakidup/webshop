const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat+Alternates' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Coda' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    "@/assets/css/main.css",
    { src: 'bulma/bulma.sass', lang: 'sass' },
    "@/assets/css/main.scss"
    // { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-buefy',
    // 'nuxt-vuex-localstorage'
    ['nuxt-vuex-localstorage', {
      mode: 'debug',
      localStorage: ['products']  //  If not entered, “localStorage” is the default value
      // sessionStorage: ['sfoo', 'sbar']  //  If not entered, “sessionStorage” is the default value
    }]
    // API mode send a GET request to the api endpoint on launch
    // ['nuxt-vuex-localstorage', {
    //   mode: 'api',
    //   api: 'http://localhost:3030/test', //  If not entered, “https://ipinfo.io” is the default value
    //   keyName: 'somevalue', //  If not entered, “ip” is the default value
    //   saltName: 'region' //  If not entered, “region” is the default value
    // }]
  
  ],


  // This would run the middleware on every route change
  // router: {
  //   middleware: 'stats'
  // },


  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }

  }
}
