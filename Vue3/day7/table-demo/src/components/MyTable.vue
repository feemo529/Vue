<template>
  <table class="table table-bordered table-striped">
    <thead>
      <!-- 标题 -->
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 内容 -->
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <slot name="body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped></style>
