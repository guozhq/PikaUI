<template>
  <div class="topnavAndBanner">
    <TopNav />
    <div class="banner">
      <h1>Pika UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
  name: 'Home',
  components: {TopNav}
};
</script>
<style lang="scss" scoped>
.topnavAndBanner{
  background: rgb(227,255,253);
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
}
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
    }
  }
}
</style>