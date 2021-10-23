<template>
<div>
  <Navigation/>
  <router-view></router-view>
  <Copyright v-if="this.$route.meta.showCopyright"/>
</div>
</template>

<script>

import Navigation from './components/Navigation.vue';

import Copyright from './components/Copyright.vue';

export default {
  name: 'App',
  components:{Navigation,Copyright},
}
</script>
<style>
  li{
    list-style-type: none;
  }
</style>