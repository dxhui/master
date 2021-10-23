<template>
  <div class="container">
    <div class="form_style">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <img src="../assets/icons/user.svg" alt="">
        </div>
        <input type="text" class="form-control" placeholder="请输入用户名">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <img src="../assets/icons/pass.svg" alt="">
        </div>
        <input type="password" class="form-control" placeholder="请输入密码">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Log'
}
</script>

<style scoped>
  .form_style{
    max-width: 330px;
    margin: 50px auto;
  }
</style>