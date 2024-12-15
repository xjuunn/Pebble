import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,

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
  compatibilityDate: '2024-11-17',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@hypernym/nuxt-anime',
    '@nuxt/icon',
    'unplugin-icons/nuxt'
  ]
});