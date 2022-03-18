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
        <Menu :routes="routes" />
      </el-menu>
    </el-col>
  </el-row>
</template>
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import Menu from './Menu';
const store = useStore();
let routes = ref([]);
async function getUserInfo() {
  const res = await axios.post('/api/user', {
    data: {
      id: 2, //id为2是管理员
    },
  });
  console.log(res, 'res');
  routes.value = reactive(res.data);
  store.commit('routes/setRoutes', routes);
  console.log(store.state.routes.routes, 'routesss');
  console.log(routes, 'routes');
  //把左側列表编译出来
}
getUserInfo();
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.outer_container {
  height: 100%;
}
</style>
