<i18n>
常规使用
</i18n>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>h1</div>
      <div>h2</div>
    </template>
    <template v-slot:title>
      <Strong>标题</Strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    return {
      x,toggle, f1, f2
    }
  }
};
</script>

<style lang="scss" scoped>

</style>