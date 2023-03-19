import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
import {defineConfig} from 'vite';
const demoPlugin ={
  name: 'demo',
  demo: (options) => {
    const { code, path } = options
    const file = fs.readFileSync(path).toString()
    const parsed = baseParse(file).children.find(n => n.tag === 'demo')
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join('').trim()
    return `export default function (Component) {
        Component.__sourceCode = ${
      JSON.stringify(main)
    }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
  }
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
