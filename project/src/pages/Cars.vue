<template>
  <div class="container">
    <el-empty description='当前未登录！' v-if="localSave = false">
      <el-button type='success' plain>立即登录</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
    name:'Cars',
    methods:{
      
    }
}
</script>

<style scoped>
  .no_login{
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>