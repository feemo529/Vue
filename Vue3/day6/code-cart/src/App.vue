<template>
  <div class="app-container">
    <es-header title="购物车案例"></es-header>
    <es-goods v-for="item in goodlist" :key="item.id" :id="item.id" :thumb="item.goods_img" :title="item.goods_name" :price="item.goods_price" :count="item.goods_count" :checked="item.goods_state" @stateChange="onGoodsStateChange" @countChange="onGoodsCountChange"></es-goods>
    <es-footer :isfull="flag" :amount="amount" :total="total" @fullChange="onFullStateChange"></es-footer>
  </div>
</template>

<script>
import EsFooter from './components/EsFooter.vue'
import EsGoods from './components/EsGoods.vue'
import EsHeader from './components/EsHeader.vue'

export default {
  name: 'MyApp',
  components: { EsHeader, EsFooter, EsGoods },
  data() {
    return {
      goodlist: [],
      flag: false
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/cart')
      if (res.status !== 200) return alert('请求商品列表数据失败')
      this.goodlist = res.list
    },
    onFullStateChange(isFull) {
      this.goodlist.forEach(x => (x.goods_state = isFull))
      this.flag = isFull
    },
    onGoodsStateChange(e) {
      const findResult = this.goodlist.find(x => x.id == e.id)
      if (findResult) {
        findResult.goods_state = e.value
      }
      this.flag = this.goodlist.every(x => x.goods_state)
    },
    onGoodsCountChange(e) {
      const findResult = this.goodlist.find(x => x.id == e.id)
      if (findResult) {
        findResult.goods_count = e.value
      }
    }
  },
  computed: {
    amount() {
      return this.goodlist.filter(x => x.goods_state).reduce((x, y) => x + y.goods_price * y.goods_count, 0)
    },
    total() {
      return this.goodlist.filter(x => x.goods_state).reduce((x, y) => x + y.goods_count, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
