/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <div v-for="(item, index) in routes" :key="index">
    <el-sub-menu :index="item.path" v-if="item.children">
      <template #title>
        <div v-if="item.meta">{{ item.meta.title }}</div>
      </template>
      <Menu :routes="item.children" />
    </el-sub-menu>
    <el-menu-item :index="item.path" v-else>{{ item.meta ? item.meta.title : '' }}</el-menu-item>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
console.log('fjdsajfjsdajfdsja');
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  routes: {
    type: Array,
  },
});
</script>

<style scoped></style>
