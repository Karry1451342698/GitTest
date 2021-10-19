<template>
  <div class="news">
      <h2>新闻详情</h2>
      <p>显示编号为{{$route.params.nid}}的新闻</p>
  </div>
</template>

<script>
export default {
  name:'news'
}
</script>

<style>
.news{
    width: 180px;
    height: 600px;
    background-color:lightgreen;
}
</style>