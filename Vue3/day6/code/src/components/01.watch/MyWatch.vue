<template>
  <div>
    <h3>watch 侦听器的用法</h3>
    <input type="text" v-model.trim="info.username" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyWatch',
  data() {
    return {
      username: 'admin',
      info: {
        username: 'zs',
        age: 20
      }
    }
  },
  watch: {
    // username: {
    //   async handler(newVal, oldVal) {
    //     const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newVal}`)
    //     console.log(res)
    //   },
    // 立即触发
    //   immediate: true
    // }
    // 监听对象
    // info: {
    //   async handler(newVal) {
    //     const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newVal.username}`)
    //     console.log(res)
    //   },
    //   immediate: true,
    // 必须用deep
    //   deep: true
    // }
    // 监听单个键用 '对象名.键'
    'info.username': {
      async handler(newVal) {
        const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newVal}`)
        console.log(res)
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style></style>
