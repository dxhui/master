<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand">
            <img src="../../public/logo.jpg" width="60px">
        </a>
        <!-- 移动设备上隐藏导航，显示按钮 -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link text-size" to="/content">首页</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-size" to="/ancient">古装</router-link>
            </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link text-size" active-class='active' to="/log">登录/注册</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cars"><img src="../assets/icons/bag-dash.svg" alt=""></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/search"><img src="../assets/icons/search.svg" alt=""></router-link>
                </li>
            </ul>
            
            <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
        </div>
      </nav>
    </div>
</template>

<script>
export default {
    // 该组件为头部导航组件
    name:'Navigation',
}
</script>
<style scoped>
    .text-size{
        margin-right: 20px;
    }
    
</style>