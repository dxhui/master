<template>
  <div class="container">
    <div class="card card_style">
      <div class="card-header">
          首页 > 古装
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-6" v-for='list in lists' :key='list.id'>
              <div class="img-thumbnail">
                  <router-link :to="{
                      path:'/detail',
                      query:{
                          id:list.g_id,
                          url:list.g_url,
                          title:list.g_title,
                          price:list.g_price
                      }
                  }">
                    <img :src='list.g_url' class="img-fluid">
                    <div class="character_set">
                        <p style="color:gray;font-size: 14px;margin-top: 5px;">{{list.g_title}}</p>
                    </div>
                    <hr><div class="a_style"><a href="">￥{{list.g_price}}</a><a href="#" @click.prevent="addCar" style="float:right;">添加到购物车</a></div>
                  </router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'
import axios from 'axios';
export default {
    //该组件为图片内容列表
    name:'Content',
    data(){
        return{
            lists:[],
        }
    },
    methods:{
        addCar(){
            let userInfo = localStorage.getItem('userInfo');
            let _this = this;
            if (userInfo === null) {
                Message.warning('未登录，正在前往登录页面，请稍后。。。')
                setTimeout(() => {
                    _this.$router.replace('/log')
                }, 2500);
            } else {
                Message.success('等我发个请求在成功也不迟');
            }
        }
    },
    mounted(){
        axios.get('http://localhost/web/api/goods_deal.php')
        .then(res => {
            this.lists = res.data;
        })
    },
}
</script>

<style scoped>
    .card_style{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .a_style{
        height: 35px;
    }
    .img-thumbnail{
        margin-top: 20px;
        margin-bottom: 20px;
        transform: translateY(0);
        /* 移回也需要0.4s时间过渡 */
        transition: transform 0.2s linear 0s;
        transition: all 0.4s;
    }
    .img-thumbnail:hover{
        box-shadow: 0 0 15px 0 gray;
        transform: translateY(-5px);
        /* 0.4s完成transform移动效果*/
        transition: transform 0.2s linear 0s;
        transition: all 0.4s;
    }
    .character_set{
        width: 95%;
        margin: 0 auto;
    }
    .a_style a{
        color: #282C34;
    }
    .img-thumbnail > a{
        text-decoration: none;
    }
</style>