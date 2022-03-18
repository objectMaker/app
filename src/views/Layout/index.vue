<template>
  <div class="container">
    <sider :style="{ height: '100%' }" />
    <navbar />
    <router-view />
  </div>
</template>
<script setup>
import sider from './components/sider.vue';
import navbar from './components/navbar.vue';
</script>
<style scoped>
.container {
  height: 100%;
}
</style>
