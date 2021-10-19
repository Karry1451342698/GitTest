<template>
  <div>
      <h2>要闻</h2>
      <h4>{{$route.query.title}}</h4>
      <p>{{$route.query.content}}</p>
  </div>
</template>

<script>
export default {
name:'Event'
}
</script>

<style>

</style>