<template>
<div>
  <Navigation/>
  <!-- <Rotation/> -->
  <router-view></router-view>
  <Copyright/>
</div>
</template>

<script>

import Navigation from './components/Navigation.vue';
// import Rotation from './components/Rotation.vue';
import Copyright from './components/Copyright.vue';

export default {
  name: 'App',
  components:{Navigation,Copyright}
}
</script>
<style>
  li{
    list-style-type: none;
  }
</style>