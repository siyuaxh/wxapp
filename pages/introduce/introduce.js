//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    org_name : '壹平健康管理机构',
    org_introduce : '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊...',
    view_detail : '查看详情',
    userInfo: {}

  },
  //事件处理函数
  directToProject1: function() {
    wx.navigateTo({
      url: '../project/project1'
    })
  },
  directToProject2: function() {
    wx.navigateTo({
      url: '../project/project2'
    })
  },
  directToProject3: function() {
    wx.navigateTo({
      url: '../project/project3'
    })
  },
  directToProject4: function() {
    wx.navigateTo({
      url: '../project/project4'
    })
  },
  directToProject5: function() {
    wx.navigateTo({
      url: '../project/project5'
    })
  },
  showDetail : function() {
    console.info("11111");
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
