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
$h:32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.pika-button{
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  border-radius: $radius;
  border: 1px solid $border-color;
  background: white;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus{
    outline: none;
  }
}
</style>