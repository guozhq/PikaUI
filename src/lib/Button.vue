<template>
  <button class="pika-button" :class="classes">
    <slot />
  </button>
</template>
<script lang="ts">
import {computed} from 'vue'
export default {
  props: {
    theme: {
      type:String,
      default:'button',
    },
    size: {
      type: String,
      default: 'normal',
    }
  },
  setup(props: { theme: any; size: any; }){
    const {theme, size} = props;
    const classes = computed(()=>{
      return {
        [`pika-theme-${theme}`]:theme,
        [`pika-size-${size}`]:size,
      }
    });
    return {classes};
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
  &.pika-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover, &:focus{
      color: lighten($blue, 10%)
    }
  }
  &.pika-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover, &:focus{
      background: darken(white, 5%)
    }
  }
  &.pika-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.pika-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>