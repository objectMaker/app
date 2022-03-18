<template>
  <el-row class="outer_container">
    <el-col :span="3" class="outer_container">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo outer_container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <Menu :routes="store.state.routes.routes" />
      </el-menu>
    </el-col>
  </el-row>
</template>
<script setup>
import { useStore } from 'vuex';
import Menu from './Menu';
const store = useStore();
</script>
<style scoped>
.outer_container {
  height: 100%;
}
</style>
