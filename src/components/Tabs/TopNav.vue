<template>
  <div class="top_nav">
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link to="/" class="logo" v-if="toggleLogoVisible">
      <svg class="icon">
        <use xlink:href="#icon-cherry" style="font-size:60px;"></use>
      </svg>
    </router-link>
    <router-link to="/doc/intro" class="version" v-if="toggleVersionVisible">
      <span style="">0.0.1版</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc/intro" style="text-decoration: none; ">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default: false,
    },
    toggleLogoVisible:{
      type:Boolean,
      default:false,
    },
    toggleVersionVisible:{
      type:Boolean,
      default:false,
    },
  },
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () =>{asideVisible!.value = !asideVisible!.value}
    return {toggleAside}
  }
};
</script>

<style lang="scss" scoped>
$color: #0d2451;
.top_nav {
  color:$color;
  display: flex;
  max-width: 100%;
  padding: 16px;
  justify-content: space-between;
  .logo {
    max-width: 6em;
    >svg{
      width:32px;
      height:32px;
    }
  }
  .version{
    cursor: pointer;
    text-decoration: none;
    :hover{
      background: #d63a5f;
      color:#fff5f8;
    }
    >span{
      background: #fff5f8;
      color:#d63a5f;
      padding:4px;
      border-radius: 4px;
      font-size:12px;
    }
  }
  .menu {
    display: flex;
    li {
      margin: 0 1em;
    }
  }
  .toggleAside{
    width:24px;
    height: 24px;
    display:none;
  }
  @media (max-width:500px){
    >.menu {
      display: none;
    }
    >.logo {
      margin: 0 auto;
    }
    .toggleAside{display:inline-block;}
  }
}
</style>