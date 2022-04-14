<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <hr />
    <my-header title="MyHeader" bgcolor="#000" color="#f8f8f8"></my-header>
  </div>
</template>

<script>
import MyHeader from './06.MyHeader/MyHeader.vue'
export default {
  components: { MyHeader },
  name: 'MyApp06'
}
</script>

<style lang="less" scoped>
.app-container {
  margin-top: 45px;
}
</style>
