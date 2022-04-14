<template>
  <h1>App 根组件</h1>
  <hr />
  <todo-input @add="getTask"></todo-input>
  <todo-list :list="tasklist"></todo-list>
  <todo-button v-model:active="activeIndex"></todo-button>
</template>

<script>
import TodoButton from './components/TodoButton.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
export default {
  components: { TodoInput, TodoList, TodoButton },
  name: 'MyApp',
  data() {
    return {
      // 任务列表数据
      todolist: [
        { id: 1, task: '周一早上9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: true },
        { id: 3, task: '准备周三上午的演讲稿', done: false }
      ],
      nextId: 4,
      activeIndex: 0
    }
  },
  methods: {
    getTask(val) {
      this.todolist.push({
        id: this.nextId,
        task: val,
        done: false
      })
      this.nextId++
    }
  },
  computed: {
    tasklist() {
      switch (this.activeIndex) {
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done)
        case 2:
          return this.todolist.filter(x => !x.done)
      }
    }
  }
}
</script>

<style></style>
