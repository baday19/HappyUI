Page({
  data:{
    list0: [
      {
        text: "二手手机",
        icon: '/res/xianzhi.png'
      },
      {
        text: "游戏交易",
        icon: '/res/xianzhi.png'
      },
      {
        text: "二手图书",
        icon: '/res/xianzhi.png'
      },
      {
        text: "珠宝文玩",
        icon: '/res/xianzhi.png'
      }
    ],
    list1: [
      {
        text: "优品捡漏",
        icon: '/res/xianzhi.png'
      },
      {
        text: "值得买",
        icon: '/res/xianzhi.png'
      },
      {
        text: "旧物换礼",
        icon: '/res/xianzhi.png'
      },
      {
        text: "值得卖",
        icon: '/res/xianzhi.png'
      }
    ],
  },
  myInput(e){
    console.log(e.detail)
  },
  mySearch(e){
    console.log(e)
  }
})