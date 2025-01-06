import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  imports:{
    dirs:[
      "models/**/*","stores/**/*"
    ]
  },
  routeRules: {
    '/': { prerender: true }
  },
  devServer: { host: process.env.TAURI_DEV_HOST || 'localhost' },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
    plugins: [
      tailwindcss(),
      Components({
        resolvers: [
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
  css: ["~/assets/app.css"],
  compatibilityDate: '2024-11-17',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/device',
    '@hypernym/nuxt-anime',
    '@nuxt/icon',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ]
});