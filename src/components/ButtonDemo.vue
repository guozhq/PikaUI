<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
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
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button theme="link" level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button theme="text" level="danger">危险按钮</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用文本按钮</Button>
  <h1>示例5</h1>
  <Button loading>加载中</Button>
  <Button >加载完成</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button},
};
</script>

<style lang="scss" scoped>

</style>