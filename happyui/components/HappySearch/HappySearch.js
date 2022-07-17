// happyui/components/HappySearch/HappySearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type: String,
      value: '手表男机械手表'
    },
    type: {
      type: Number,
      value: 0
    },
    btnText: {
      type: String,
      value: '搜索'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    input(e){
      this.triggerEvent('hainput', e.detail.value)
    },
    tap(e){
      this.triggerEvent('hatap', e)
    },
    tapBtn(e){
      this.triggerEvent('hatapbtn', e)
    }
  }
})
