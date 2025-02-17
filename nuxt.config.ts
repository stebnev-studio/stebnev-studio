// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    vscode: {
      reuseExistingServer: true,
    },

    timeline: {
      enabled: true,
    },
  },
  build: {
    transpile: ["gsap"],
  },
  ssr: true,
  routeRules: {
    "/": {
      prerender: false,
      ssr: true,
    },
    "/about": { prerender: false, ssr: true },
    "/dev": { prerender: false, ssr: true },
    "/support": { prerender: false, ssr: true },
    "/advert": { prerender: false, ssr: true },
    "/cases": { prerender: false, ssr: true },
    "/feedback": { prerender: false, ssr: true },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "default",
    },
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" }],
      script: [
        {
          src: "https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false
  },
  css: ["~/assets/css/global.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
        },
      },
    },
    server: {
      cors: false,
    },
  },
  plugins: [
    "~/plugins/vee-validate",
    "~/plugins/changeBackgroundColor",
  ],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        preload: true,
        families: {
          Montserrat: {
            wght: "100..900",
          },
        },
      },
    ],
    "nuxt-swiper",
    "@vueuse/nuxt",
    "@nuxt/devtools",
    "nuxt-headlessui",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "nuxt-build-cache",
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components

    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  }
});
