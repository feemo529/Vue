<template>
  <h3>标题:{{ title }}</h3>
  <h5>作者:{{ author }}</h5>
  <h5>发布时间:{{ pubTime }}</h5>
</template>

<script>
export default {
  name: 'MyArticle',

  props: ['title', 'author', 'pubTime']
}
</script>
