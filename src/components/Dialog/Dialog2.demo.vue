<i18n>
一键打开 Dialog
</i18n>
<template>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import { h } from 'vue';
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';

export default {
  components: {Button},
  setup(){
    const showDialog = ()=>{
      openDialog({
        title: h('strong', {}, '标题'),
        content: '内容',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {showDialog}
  }
};
</script>

<style lang="scss" scoped>

</style>