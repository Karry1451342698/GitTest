<script setup>
import router from './router/index.js';
import { ref } from 'vue';
const toHome = () => {
  router.push('/home');
};
const toAbout = () => {
  router.push('/about'); //与index.js关联
};
let nid = ref('123'); //响应式数据变化，nid不变
const toNews =()=>{
  router.push("/new/"+nid.value);
}
const toEvent=()=>{
  router.push({path:'/event',query:{title: '阿富汗', content: '塔利班占领首都' }});
}
</script>

<template>
  <div>
    <!-- 菜单 /导航路由-->
    <div class="nav">
      <!-- <button @click="toHome()">首页</button>||
      <button @click="toAbout">关于我们</button> -->
      <router-link to="/home" active-class="current">首页</router-link
      >&nbsp;&nbsp;
      <router-link :to="'/news/' + nid" active-class="current"
        >新闻页面</router-link
      >&nbsp;&nbsp;
      <!-- <router-link to="/about" active-class="current">关于我们</router-link>
      <router-link
        :to="{
          path: '/event',
          query: { title: '阿富汗', content: '塔利班占领首都' },
        }"
        >今日要闻</router-link
      > -->
      <!-- //replace不能使用返回箭头 -->
      <button @click="toAbout">关于我们</button>
      <button @click="toEvent">今日要闻</button>||
    </div>
    <!-- 中间部分 -->
    <div class="maincontent">
      <!-- 展示符合路由规则结果页面 -->
      <router-view></router-view>
    </div>
    <!-- 底部版权信息 -->
    <div class="footer">底部版权信息</div>
  </div>
</template>

<style>
div {
  text-align: center;
}
.nav {
  background-color: yellow;
}
.maincontent {
  background-color: aquamarine;
}
.footer {
  background-color: orange;
}
.current,
.router-link-active {
  font-size: 18px;
  color: red;
  font-weight: bolder;
}
</style>
