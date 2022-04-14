<template>
  <div>
    <h1>App 根组件</h1>
    <hr />
    <my-table :data="goodslist">
      <template #header>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #body="{ item, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ item.goods_name }}</td>
        <td>￥{{ item.goods_price }}</td>
        <td>
          <input
            type="text"
            class="form-control form-control-sm ipt-tag"
            v-focus
            v-if="item.inputVisible"
            v-model.trim="item.inputValue"
            @blur="onInputConfirm(item)"
            @keyup.enter="onInputConfirm(item)"
            @keyup.esc="item.inputValue = ''"
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-else
            @click="item.inputVisible = true"
          >+Tag</button>
          <span
            class="badge badge-warning ml-2"
            v-for="item2 in item.tags"
            :key="item2"
          >{{ item2 }}</span>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="onRemove(item.id)"
          >删除</button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  name: 'MyApp',
  components: {
    MyTable
  },
  data() {
    return {
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('./api/goods')
      if (res.status !== 0) return alert('获取商品列表失败')
      this.goodslist = res.data
    },
    onRemove(id) {
      this.goodslist = this.goodslist.filter(x => x.id !== id)
    },
    onInputConfirm(row) {
      const val = row.inputValue
      row.inputVisible = false
      row.inputValue = ''
      if (row.tags.indexOf(val) !== -1) return
      row.tags.push(val)
    }
  },
  directives: {
    focus(el) {
      el.focus()
    }
  }
}
</script>

<style lang="less" scoped></style>

