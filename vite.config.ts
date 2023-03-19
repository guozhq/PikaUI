import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
import {defineConfig} from 'vite';
const demoPlugin ={
  name: 'demo',
}
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    demoPlugin,
    ],
})
