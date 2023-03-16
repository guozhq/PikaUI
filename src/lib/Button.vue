<template>
  <button class="pika-button" :class="`theme-${theme}`">
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type:String,
      default:'button',
    },
  }
}
</script>
<style lang="scss">
.pika-button{
  box-sizing: border-box;
  height: 32px;
  padding: 0 12px;
}
</style>