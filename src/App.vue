<template>
  <div>
    <li-head></li-head>
    <ul id="listfir">
      <router-link class="listfirLi" :to="{ path: '/shangpin'}" tag="li">添加书籍</router-link>
      <router-link class="listfirLi" :to="{ path: '/pinglun'}"  tag="li">书籍列表</router-link>
      <li class="listfirLi liActive"  >信息修改</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import liHead from '@/components/head/lihead.vue'
  export default {
  name:'app',
  components:{
    liHead
  }
}
</script>

<style scoped>
#listfir{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.listfirLi{
    flex: 1;
    text-align: center;
    font-size: 1em;
}
.router-link-active{
    color: orange;
}
.liActive{
    color: rgb(19, 208, 241);
}
</style>
