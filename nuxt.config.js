export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Sales",
    title: "Sales",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      { rel: "icon", type: "image/x-icon", href: "/seedify.png" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/client.js", ssr: false },
    { src: "~/plugins/apex-chart.js", mode: "client" },
    "~/plugins/currency.js",
    "~/plugins/list.js",
    "~/plugins/avatar.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    // Move @nuxtjs/vuetify to the end to ensure Tailwind takes precedence
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    optionsPath: "~/plugins/vuetify.js",
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
