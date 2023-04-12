<template>
  <component v-bind:is="content"></component>
</template>

<script lang="ts">
import {ref} from 'vue';
export default {
  props:{
    path:{
      type: String,
      required: true,
    }
  },
  setup(props){
    const content = ref<String>(null)
    import (props.path).then(result =>{
      content.value = result.default
    })
    console.log(content)
    return {content}
  }
};
</script>
<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
