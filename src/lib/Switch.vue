<template>
  <button class="pika-switch" :class="{'pika-checked':value}" @click="toggle">
    <span></span>
  </button>
</template>
<script lang="ts">
import {ref} from 'vue';
export default{
  name: 'Switch',
  setup(){
    const value=ref(false);
    const toggle=()=>{
      value.value = !value.value
    }
    return {value, toggle}
  }
}
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.pika-switch{
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: calc($h/2);
  position: relative;
  > span{
    position: absolute;
    width: $h2;
    height: $h2;
    background: white;
    top: 2px;
    left: 2px;
    border-radius: calc($h2/2);
    transition: left 250ms;
  }
  &.pika-checked{
    background: #1677ff;
    > span{
      left: calc(100% - $h2 - 2px);
    }
  }
}
</style>
