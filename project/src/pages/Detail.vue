<template>
  <div class="container">
    <img :src="url" alt="">
    <p>{{title}}-{{price}}</p>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title','price','url'], //接收Content组件传递的参数
    mounted(){
      console.log(this.$route);
    }
}
</script>

<style>

</style>