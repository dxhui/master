<template>
  <div class="container">
    <section class="no_login">
      <img src="../assets/icons/alert.svg" alt=""><br>
      <h3>您还没有登录 !</h3>
      <button type="button" class="btn btn-info">立即登录 !</button>
    </section>
  </div>
</template>

<script>
export default {
    name:'Cars'
}
</script>

<style scoped>
  .no_login{
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>