// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: {
    enabled: true,

    vscode: {
      reuseExistingServer: true
    },

    timeline: {
      enabled: true
    }
  },
  build: {
    transpile: ['gsap'],
  },
  ssr: false,
  routeRules: {
    '/' : { prerender: true }
  },
  app: {

    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [{
        src: 'https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js'
      }]
    }
  },
  css: ['~/assets/css/global.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
        },
      },
    },
  },
  plugins: [
    '~/plugins/vee-validate'
  ],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: {
          wght: '100..900'
        }
      }
    }], 
    'nuxt-swiper', 
    '@vueuse/nuxt', 
    '@nuxt/devtools', 
    'nuxt-headlessui', 
    "@nuxt/image", 
    '@vueuse/nuxt', 
    '@hypernym/nuxt-gsap',
    '@vee-validate/nuxt'
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components

    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  gsap: {
    composables: true
  }
})
