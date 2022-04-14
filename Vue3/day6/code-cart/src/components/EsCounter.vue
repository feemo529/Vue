<template>
  <div class="counter-container">
    <!-- 数量 -1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="this.number--" :disabled="this.number == 1">-</button>
    <!-- 输入框 -->
    <input type="number" class="form-control form-control-sm ipt-num" v-model.number.lazy="number" />
    <!-- 数量 +1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="this.number++">+</button>
  </div>
</template>

<script>
export default {
  name: 'EsCounter',
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  emits: ['numChange'],
  data() {
    return {
      number: this.num
    }
  },
  watch: {
    number(newVal) {
      const parseResult = parseInt(newVal)
      if (isNaN(parseResult) || parseResult < 1) {
        this.number = 1
        return
      }
      if (String(parseResult).indexOf('.') !== -1) {
        this.number = parseResult
        return
      }
      this.$emit('numChange', this.number)
    }
  }
}
</script>

<style lang="less" scoped>
.counter-container {
  display: flex;
  // 按钮的样式
  .btn {
    width: 25px;
  }
  // 输入框的样式
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
}
</style>
