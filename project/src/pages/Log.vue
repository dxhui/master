<template>
  <div class="container ctrl_style">
    <p style="text-align:center;margin-top:50px;">登录</p>
    <div class="row">
      <div class="col-xl-4 ctrl_style">
        <el-input placeholder="请输入用户名"
        prefix-icon='el-icon-s-custom'
        v-model="user">
        </el-input>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 ctrl_style">
        <el-input placeholder="请输入密码"
        type='password' 
        prefix-icon='el-icon-lollipop'
        v-model="pass">
        </el-input>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 ctrl_style">
        <el-button type="primary" @click="login">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {Message} from 'element-ui'
import qs from 'qs'
export default {
    name:'Log',
    data(){
      return{
        user:'',
        pass:'',
      }
    },
    methods:{
      login(){
        let obj = {
          user:this.user,
          pass:this.pass
        }
        obj = qs.stringify(obj);
        if(this.user == '' || this.pass == ''){
          Message.warning('用户名或密码未填写！');
        } else {
            axios.post('http://localhost/web/api/user_info.php',obj)
            .then(res => {
              if(res.data.message == 'err'){
                Message.error('登录失败,用户名或密码错误！');
              }else{
                Message.success('登录成功！');
                let localData = res.data;
                localStorage.setItem('userInfo',JSON.stringify(localData));
                // this.$router.go(-1); 没有效果
              }
            },err => {
              console.log(err);
          })
        }
      }
    }
}
</script>

<style scoped>
  .ctrl_style{
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
  }
</style>