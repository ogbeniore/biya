export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Biya',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Biya lets you do airtime top-up, pay bills and transfer funds easily via Facebook Messenger, Telegram, Slack and Skype.' },
      { hid: 'keywords', name: 'keywords', content: 'Buy airtime, pay bills, send and receive money via your favourite messaging app!' },
      { hid: 'og:url', name: 'og:url', content: 'https://biya.com.ng/' },
      { hid: 'og:title', name: 'og:title', content: 'Biya is the easiest way to buy airtime, pay bills and more!' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Biya' },
      { hid: 'og:image', name: 'og:image', content: 'https://res.cloudinary.com/pitech/image/upload/v1636371557/biya-icon.jpg' },
      { hid: 'og:description', name: 'og:description', content: 'Biya lets you do airtime top-up, pay bills and transfer funds easily via Facebook Messenger, Telegram, Slack and Skype.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@biyabot' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://biya.com.ng/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Biya is the easiest way to buy airtime, pay bills and more!' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Biya is the easiest way to buy airtime, pay bills and more!' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://res.cloudinary.com/pitech/image/upload/v1636371557/biya-icon.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 3000 // default: 3000
  }
}
