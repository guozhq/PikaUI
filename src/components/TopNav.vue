<template>
  <div class="top_nav">
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-Pikachu"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
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
    }
  },
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () =>{asideVisible!.value = !asideVisible!.value}
    return {toggleAside}
  }
};
</script>

<style lang="scss" scoped>
$color: #007974;
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