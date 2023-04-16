<template>
  <div class="layout">
    <TopNav class="nav"
            :toggleMenuButtonVisible="true"
            :toggleVersionVisible="true"
            :toggleLogoVisible="isLargeScreen"/>
    <div class="content">
      <aside v-if="asideVisible">
        <router-link to="/" class="asideLogo">
          <svg class="icon" >
            <use xlink:href="#icon-tiger"></use>
          </svg>
          <h4>Simple UI</h4>
        </router-link>
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
        <router-view />
      </main>
    </div>
  </div>
  <div class="overlay" v-show="asideVisible && isLargeScreen" @click="toggleAside"></div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref, ref, onMounted, onUnmounted} from 'vue';
export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const screenWidth = ref(window.innerWidth)
    const isLargeScreen = ref(false)
    const handleResize = () => {
      screenWidth.value = window.innerWidth
      isLargeScreen.value = screenWidth.value <= 500
      asideVisible!.value = screenWidth.value > 500
    }
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      isLargeScreen.value = screenWidth.value <= 500
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })
    const toggleAside = () =>{asideVisible!.value = !asideVisible!.value}
    return {asideVisible, isLargeScreen, toggleAside};
}};
</script>
<style scoped lang="scss">
$aside-index : 128;
$nav-index: 256;
$aside-width: 200px;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.nav{
    flex-shrink: 0;
    z-index:$nav-index;
    @media (min-width: 500px) {
      margin-left:$aside-width + 30px;
      margin-right:30px;
      
    }
    background: #f5f8fa;
    border-bottom: 1px dashed #e4e6ef;
  }
  >.content{
    flex-grow:1;
  }
}
.content{
  display:flex;
  .asideLogo{
    display: flex;
    padding: 10px 0 47px 32px;
    align-items: center;
    font-size:18px;
    color:#0d2451;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
  }
  svg{
    width:35px;
    height:35px;
    padding-right:10px;
  }
  >aside{
    flex-shrink: 0;
  }
  >main{
    flex-grow:1;
  }
}
aside{
  background:#fff;
  width:$aside-width;
  padding: 0 0 16px 0;
  position:fixed;
  top:0;
  left:0;
  height:100%;
  z-index: $aside-index;
  >h2 {
    margin-bottom: 4px;
    margin-top: 4px;
    padding: 0 32px;
    color:#0d2451;
  }
  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 32px;
        text-decoration: none;
        color:#3f4254;
      }
      .router-link-active {
        background: #f4bf56;
        color:#fff;
      }
    }
  }
}

aside{
  h4{
    margin-top:10px;
  }
}

main{
  @media (min-width: 500px) {
    margin-left:$aside-width + 30px;
    margin-right:30px;
    margin-bottom:40px;
  }
  margin-top:40px;
  background:#fff;
  border-radius: 8px;
  padding: 70px 50px;
}
@media (max-width: 500px) {
  .asideLogo {
    visibility: hidden;
  }
  main{
    padding:10px;
    margin-top:0;
  }
}
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.12);
}
</style>