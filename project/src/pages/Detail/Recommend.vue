<template>
  <div class="card">
      <div class="card-header">
          为你推荐
      </div>
      <div class="container">
          <div class="row">
              <div class="col-xl-3 col-lg-4 col-6" v-for='rand in randLists' :key="rand.id">
                  <router-link :to="{
                      path:'/detail',
                      query:{
                          id:rand.g_id,
                          url:rand.g_url,
                          title:rand.g_title,
                          price:rand.g_price
                      }
                  }">
                      <img :src="rand.g_url" class="img-thumbnail" alt="err">
                  </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Recommend',
    data(){
        return{
            randLists:[],
        }
    },
    created(){
        axios.get('http://localhost/web/api/goods_random.php')
        .then(res => {
            this.randLists = res.data
        })
    }
}
</script>

<style scoped>
    .row > div{
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>>

