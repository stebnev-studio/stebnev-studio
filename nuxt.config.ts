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
    "/": { prerender: true, ssr: false },
    "/about": { prerender: false, ssr: false },
    "/dev": { prerender: false, ssr: false },
    "/support": { prerender: false, ssr: false },
    "/advert": { prerender: false, ssr: false },
    "/cases": { prerender: false, ssr: false },
    "/feedback": { prerender: false, ssr: false },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      script: [
        {
          src: "https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js",
        },
      ],
    },
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
    {
      src: "~/plugins/LenisLocomotiveScroll",
      mode: "client",
    },
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
    "@hypernym/nuxt-gsap",
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
  },
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
