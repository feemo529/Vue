<template>
  <div class="footer-container">
    <!-- 全选按钮 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck1" :checked="isfull" @change="onCheckBoxChange" />
      <label class="custom-control-label" for="customCheck1">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="amount">￥{{ amount.toFixed(2) }}</span>
    </div>
    <!-- 结算 -->
    <button type="button" class="btn btn-primary" :disabled="total === 0">结算({{ total }})</button>
  </div>
</template>

<script>
export default {
  name: 'Esfooter',
  props: {
    amount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    isfull: {
      type: Boolean,
      default: false
    }
  },
  emits: ['fullChange'],
  methods: {
    onCheckBoxChange(e) {
      this.$emit('fullChange', e.target.checked)
      // console.log(e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.custom-checkbox .custom-control-label::before {
  border-radius: 10px;
}
.amount {
  color: red;
  font-weight: bold;
}
.btn-primary {
  // 设置固定高度
  height: 38px;
  // 设置圆角效果
  border-radius: 19px;
  // 设置最小宽度
  min-width: 90px;
}
</style>
