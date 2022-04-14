<template>
  <div class="app-container">
    <h1>App根组件</h1>

    <p>App中的p标签</p>
    <p>App中的p标签</p>
    <hr />
    <MyList></MyList>
  </div>
</template>

<script>
import MyList from './List.vue'
export default {
  name: 'MyApp',
  components: {
    MyList
  }
}
</script>

<style lang="less" scoped>
p {
  color: red;
}
// vue2.0
// /deep/.title {
//   color: blue;
// }
// vue3.0
:deep(.title) {
  color: blue;
}
</style>
