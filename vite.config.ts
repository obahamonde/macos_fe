import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import workerLoader from "rollup-plugin-web-worker-loader"


export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
                ws: true,
                followRedirects: true,
            },
          },
          watch: {
              ignored: ['node_modules', 'dist', 'public'],

    },
  },

  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          reactivityTransform: true,
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    workerLoader(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],

})
