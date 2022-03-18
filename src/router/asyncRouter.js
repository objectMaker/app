export default {
  //引入响应的组件。到时候在router·里面动态加载，选择暴露函数
  CreateLiveStu: () => import('@/views/CreateLiveStu.vue'),
  LiveRoom: () => import('@/views/LiveRoom.vue'),
  LiveListStu: () => import('@/views/LiveListStu.vue'),
  LiveList: () => import('@/views/LiveList.vue'),
  MyLiveStu: () => import('@/views/MyLiveStu.vue'),
};
