<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-12">
        <img :src="url" class="img-thumbnail">
      </div>
      <div class="col-xl-8 col-lg-8 col-12">
        <div><p>{{title}}</p></div>
        <div><p>{{price}}</p></div>
      </div>
    </div>
    <Recommend/>
  </div>
</template>

<script>
import Recommend from './Detail/Recommend.vue'
export default {
    name:'Detail',
    props:['id','title','price','url'], //接收Content组件传递的参数
    components:{Recommend}
}
</script>

<style scoped>
  .row > div{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>>