<template>
  <div class="top_nav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-Pikachu"></use>
      </svg>
    </div>
    <div class="toggleAside" @click="toggleAside"></div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'TopNav',
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
    background: red;
    display:none;
  }
  @media (max-width:500px){
    .logo{display: none;}
    .toggleAside{display:inline-block;}
  }
}
</style>