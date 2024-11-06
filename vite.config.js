import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: './src/assets/override.scss',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
