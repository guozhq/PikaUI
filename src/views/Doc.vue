<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>
<template>
  <div class="layout">
    <TopNav class="nav" :toggleMenuButtonVisible="true"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content{
    display:flex;
    flex:1;
  }
}
.content{
  aside {
    background: lightgreen;
    width: 150px;
    padding: 16px 0;
    flex-shrink: 0;
    h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }
    ol {
      li {
        a{
          display:block;
          padding: 4px 16px;
          text-decoration: none;
        }
        .router-link-active{
          background:white;
          display: block;
          
        }
      }
    }
  }
    main {
      flex: 1;
      padding: 16px;
      margin: 10px 0 0 10px;
    }
  @media (max-width:500px){
    main{margin:0}
  }
  }
</style>