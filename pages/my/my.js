// index.js
Page({
  data: {
    list0: [
      {
        text: "1收藏",
        openType: "feedback"
      },
      {
        text: "2关注",
      },
      {
        text: "0粉丝"
      },
    ],
    list1: [
      {
        icon: '/res/xianzhi.png',
        text: "我发布的",
      },
      {
        icon: '/res/xianzhi.png',
        text: "我卖出的",
      }
    ],
    list2: [
      {
        icon: '/res/xianzhi.png',
        text: "我买到的",
      },
      {
        icon: '/res/xianzhi.png',
        text: "我收藏的",
      },
      {
        icon: '/res/xianzhi.png',
        text: "我租到的",
      }
    ],
    list3: [
      {
        icon: '/res/xianzhi.png',
        text: "快乐币",
      },
      {
        icon: '/res/xianzhi.png',
        text: "我的天堂",
      },
      {
        icon: '/res/xianzhi.png',
        text: "我的帖子",
      },
      {
        icon: '/res/xianzhi.png',
        text: "边逛边赚钱",
      },
      {
        icon: '/res/xianzhi.png',
        text: "边逛边赚钱",
      }
    ],
    menuList: [
      {
        title: '我的足迹',
      },
      {
        title: '客服中心',
        subtitle: '联系客服',
        openType: "contact"
      },
      {
        title: '问题反馈',
        subtitle: '提交发现的问题',
        openType: "feedback"
      },
      {
        title: '更多设置',
      },
    ]
  },
  fun(e){
    console.log(e)
  },
})
