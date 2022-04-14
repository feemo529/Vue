<template>
  <div class="header-container" :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }">{{ title }}</div>
</template>

<script>
export default {
  name: 'EsHeader',
  props: {
    title: {
      type: String,
      required: true,
      default: 'EsHeader组件'
    },
    color: {
      type: String,
      default: '#fff'
    },
    bgcolor: {
      type: String,
      default: '#0078d7'
    },
    fsize: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  height: 45px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>
