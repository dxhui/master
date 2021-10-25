<template>
<div>
  <Navigation/>
  <Rotation v-if="this.$route.meta.showCopyright"/>
  <router-view></router-view>
  <Copyright v-if="this.$route.meta.showCopyright"/>
</div>
</template>

<script>

import Navigation from './components/Navigation.vue';
import Rotation from './components/Rotation.vue';
import Copyright from './components/Copyright.vue';

export default {
  name: 'App',
  components:{Navigation,Copyright,Rotation},
}
</script>
<style>
  li{
    list-style-type: none;
  }
</style>