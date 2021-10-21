<template>
  <div class="footer_style d-none d-lg-block">
      <div class="container">
          <ul>
             <li v-for="list in lists" :key="list.id">{{list.msg}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'Copyright',
    data(){
        return{
            lists:[
                {id:1,msg:'Copyright © 品尚服饰'},
                {id:2,msg:'关于我们'},
                {id:3,msg:'用户协议'},
                {id:4,msg:'隐私政策'},
                {id:5,msg:'联系我们'}
            ]
        }
    }
}
</script>

<style scoped>
    .footer_style{
        background: #282C34;
        height: 150px;
        width: 100%;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    ul li{
        color: gray;
        float: left;
        line-height: 148px;
        margin-right: 20px;
    }
    ul li:hover{
        color:white;
    }
</style>