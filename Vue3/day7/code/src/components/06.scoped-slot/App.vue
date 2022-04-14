<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <!-- 使用自定义组件 -->
    <my-test>
      <template #default="scope">
        <p>{{ scope.msg }}</p>
        <p>{{ scope.info.address }}</p>
      </template>
    </my-test>
    <hr />

    <my-table>
      <!-- 解构作用域插槽的值 -->
      <template #default="scope">
        <td>{{ scope }}</td>
        <td>{{ scope }}</td>
        <td>
          <!-- <input type="checkbox" :checked="user.state" /> -->
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
// 导入组件
import MyTest from './MyTest.vue'
import MyTable from './MyTable.vue'

export default {
  name: 'MyApp',
  // 注册组件
  components: {
    MyTest,
    MyTable
  }
}
</script>

<style lang="less" scoped></style>
