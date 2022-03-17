<template>
  <div>{{ a }}</div>
</template>
<script setup>
import axios from 'axios';
async function getUserInfo() {
  const res = await axios.post('/api/user', {
    data: {
      id: 2,
    },
  });
  console.log(res, 'res');
}
getUserInfo();
import { ref } from 'vue';
const a = ref(0);
</script>
<style scoped lang="scss"></style>
