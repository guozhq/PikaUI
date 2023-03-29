<i18n>
支持 size
</i18n>
<template>
  <div>
    <div>
      <Button theme="button" size="big">你好</Button>
      <Button theme="button" size="normal">你好</Button>
      <Button theme="button" size="small">你好</Button>
    </div>
    <div>
      <Button theme="link" size="big">你好</Button>
      <Button theme="link" size="normal">你好</Button>
      <Button theme="link" size="small">你好</Button>
    </div>
    <div>
      <Button theme="text" size="big">你好</Button>
      <Button theme="text" size="normal">你好</Button>
      <Button theme="text" size="small">你好</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components:{Button},
};
</script>