<template>
  <div class="container">
    <button @click="cl">本地存储</button>
    <button @click="du">读取本地存储</button>
      <!-- <el-empty></el-empty> -->
  </div>
</template>

<script>
export default {
    name:'Search',
    methods:{
      cl(){
        let p = {name:'jane',age:13}
        localStorage.setItem('person',JSON.stringify(p))
      },
      du(){
        let p1 = localStorage.getItem('userInfo');
        if (p1 === null) {
          console.log('结果为空');
        } else {
          console.log(JSON.parse(p1));
        }
      }
    }
}
</script>

<style>

</style>