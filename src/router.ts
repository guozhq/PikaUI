import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/Switch/SwitchDemo.vue';
import ButtonDemo from './components/Button/ButtonDemo.vue';
import DialogDemo from './components/Dialog/DialogDemo.vue';
import TabsDemo from './components/Tabs/TabsDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';
const md = (filename: string) =>h(Markdown, {path: `../markdown/${filename}.md`, key: filename});

export const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {path:'/', component:Home},
    {
      path:'/doc', component:Doc,
      children:[
        {path: '',component:DocDemo},
        {path:'intro', component:md('intro')},
        {path:'install', component:md('install')},
        {path:'get-started', component:md('get-started')},
        {path:'switch', component:SwitchDemo},
        {path:'button', component:ButtonDemo},
        {path:'dialog', component:DialogDemo},
        {path:'tabs', component:TabsDemo},
      ]
    },
  ]
})