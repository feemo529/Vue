<template>
  <div class="btn-group mt-3">
    <button type="button" class="btn" :class="active == 0 ? 'btn-primary' : 'btn-secondary'" @click="onBtnClick(0)">全部</button>
    <button type="button" class="btn" :class="active == 1 ? 'btn-primary' : 'btn-secondary'" @click="onBtnClick(1)">已完成</button>
    <button type="button" class="btn" :class="active == 2 ? 'btn-primary' : 'btn-secondary'" @click="onBtnClick(2)">未完成</button>
  </div>
</template>

<script>
export default {
  name: 'TodoButton',
  emits: ['update:active'],
  props: {
    active: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    onBtnClick(index) {
      if (index === this.active) return

      this.$emit('update:active', index)
    }
  }
}
</script>

<style lang="less" scoped>
.btn-group {
  // 添加固定宽度
  width: 400px;
  // 文本居中效果
  text-align: center;
}
</style>
