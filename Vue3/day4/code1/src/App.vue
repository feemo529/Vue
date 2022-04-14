<template>
  <h1>这是<i>App.vue</i>根组件</h1>
  <!-- <h3>{{ username }}</h3> -->
  <hr />
  <!-- <p>count的值是:{{ count }}</p> -->
  <!-- <button @click="addCount">+1</button> -->

  <my-swiper></my-swiper>
  <my-test></my-test>
  <MyTest></MyTest>
  <hr />
  <my-search></my-search>
</template>
<script>
import Search from './components/02.privateReg/Search.vue'
export default {
  name: 'MyApp',
  components: {
    'my-search': Search
  },
  data() {
    return {
      username: 'zs',
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  }
}
</script>

<style lang="less">
h1 {
  color: red;
  i {
    color: blue;
    font-style: normal;
  }
}
</style>
