<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';
export default {
  name: 'Doc',
  components: {TopNav},
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible}
  }
};
</script>
<template>
  <div class="layout">
    <TopNav />
    <aside v-if="asideVisible">
      <h1>组件列表</h1>
      <ul>
        <li>Switch组件</li>
        <li>Button组件</li>
        <li>DigLog组件</li>
        <li>Tags组件</li>
      </ul>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.layout{
  display:flex;
  flex-direction: column;
  height: 100vh;
}
aside{
  border: 1px solid green;
  width:280px;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>