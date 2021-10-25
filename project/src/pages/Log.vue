<template>
  <div class="container">
    <div class="form_style">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <img src="../assets/icons/user.svg" alt="">
        </div>
        <input type="text" v-model="user" class="form-control" placeholder="请输入用户名">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <img src="../assets/icons/pass.svg" alt="">
        </div>
        <input type="password" v-model="pass" class="form-control" placeholder="请输入密码">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <img src="../assets/icons/pass.svg" alt="">
        </div>
        <input type="password" class="form-control" placeholder="请确认密码">
      </div>
      <input type="submit" value="登录" @click="login">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
    name:'Log',
    data(){
      return{
        user:'',
        pass:''
      }
    },
    methods:{
      login(){
        let obj = {
          user:this.user,
          pass:this.pass
        }
        obj = qs.stringify(obj);
        axios.post('http://localhost/web/api/user_info.php',obj)
        .then(res => {
          if(res.data.message == 'err'){
            alert('用户名或密码错误！');
          }else{
            alert('登录成功！');
            localStorage.setItem('x_id',res.data.uid);
          }
        },err => {
          console.log(err);
        })
      }
    }
}
</script>

<style scoped>
  .form_style{
    max-width: 330px;
    margin: 50px auto;
  }
</style>