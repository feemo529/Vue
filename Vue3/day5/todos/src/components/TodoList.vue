<template>
  <ul class="list-group">
    <li v-for="item in list" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" :id="item.id" v-model="item.done" />
        <label class="form-check-label" :class="item.done ? 'delete' : ''" :for="item.id">{{ item.task }}</label>
      </div>
      <span class="badge badge-success" v-if="item.done">已完成</span>
      <span class="badge badge-secondary" v-else>未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    list: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
.list-group {
  width: 400px;
}
.delete {
  color: gray;
  text-decoration: line-through;
  font-style: italic;
}
</style>
