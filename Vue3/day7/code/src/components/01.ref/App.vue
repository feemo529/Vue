<template>
  <div>
    <h1 ref="myh1">App 根组件</h1>
    <hr />
    <button type="button" class="btn btn-primary" @click="getRefs">获取 $refs 引用</button>

    <my-counter ref="counterRef"></my-counter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'
export default {
  components: { MyCounter },
  name: 'MyApp',
  methods: {
    getRefs() {
      // console.log(this.$refs.myh1)
      this.$refs.myh1.style.color = 'red'

      // console.log(this.$refs.counterRef)
      this.$refs.counterRef.reset()
    }
  }
}
</script>

<style></style>
