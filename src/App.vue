<template>
  <div>
    <li-head></li-head>
    <ul id="listfir">
      <router-link class="listfirLi"
       :to="{ path: '/shangpin'}" 
        tag="li"
        linkArr>商品</router-link>
      <router-link class="listfirLi" :to="{ path: '/pinglun'}"  tag="li">评论</router-link>
      <router-link class="listfirLi" :to="{ path: '/shangjia'}"  tag="li">商家</router-link>
    </ul>
    <router-view></router-view>
    <div>这里是底部</div>
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
}
</style>
