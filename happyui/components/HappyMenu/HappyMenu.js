// happyui/components/HappyMenu/HappyMenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    style: {
      type: String,
      value: ""
    },
    data:{
      type: Array,
      value: []
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
    selectItem(e){
      this.triggerEvent('hatap', e.currentTarget.dataset.index)
    }
  }
})
