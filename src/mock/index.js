import Mock from 'mockjs';
let authArr = [
  {
    id: 195,
    name: 'LiveManage',
    path: '/liveManage',
    pid: 0,
    redirect: '/liveManage/liveList',
    meta: {
      title: '直播',
      icon: 'live',
      level: 0,
    },
    children: [
      {
        id: 196,
        name: 'LiveList',
        path: '/liveManage/liveList',
        pid: 195,
        hidden: false,
        meta: {
          title: '直播列表',
          icon: 'item',
          level: 1,
        },
      },
      {
        id: 199,
        name: 'LiveRoom',
        path: '/liveManage/live/:liveId',
        pid: 195,
        hidden: true,
        meta: {
          title: '直播间管理',
          icon: 'item',
          level: 0,
        },
        children: [
          {
            id: 258,
            name: 'MyLiveStu',
            path: '/liveManageStu/myLiveStu',
            pid: 259,
            hidden: false,
            meta: {
              title: '我的直播',
              icon: 'item',
              level: 0,
            },
          },
          {
            id: 261,
            name: 'CreateLiveStu',
            path: '/liveManageStu/createLiveStu',
            pid: 259,
            hidden: false,
            meta: {
              title: '发布直播&预告',
              icon: 'item',
              level: 1,
            },
          },
        ],
      },
    ],
  },
  {
    id: 259,
    name: 'LiveManageStu',
    path: '/liveManageStu',
    pid: 0,
    redirect: '/liveManageStu/myLiveStu',
    meta: {
      title: '直播管理',
      icon: 'live',
      level: 0,
    },
    children: [
      {
        id: 256,
        name: 'LiveListStu',
        path: '/liveManageStu/liveListStu',
        pid: 259,
        hidden: false,
        meta: {
          title: '学校直播列表',
          icon: 'item',
          level: 1,
        },
      },
      {
        id: 257,
        name: 'LiveRoom',
        path: '/liveRoomStu/:liveId',
        pid: 259,
        hidden: true,
        meta: {
          title: '直播间',
          icon: 'item',
          level: 0,
        },
      },
    ],
  },
];
Mock.mock(/\/api\/user/, 'post', (option) => {
  if (JSON.parse(option.body).data.id === 2) {
    return authArr;
  } else {
    return authArr.slice(0, -1);
  }
});
