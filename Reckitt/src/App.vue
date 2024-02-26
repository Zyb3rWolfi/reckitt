<script setup>
import navbar from './components/navbar.vue';
import home from './views/home.vue';
import footerComp from './components/footer.vue';
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
  <footerComp></footerComp>

</template>

<style scoped>

</style>
