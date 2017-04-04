//app.js
App({
  globalData:{
    userInfo:null,
    contentWidth:0,
    contentPersent :0
  },
  onLaunch: function () {
    var windowWidth = 0; 
    var windowHeight = 0;

    wx.getSystemInfo({ 
      success: function (res) { 
       windowWidth = res.windowWidth; 
        windowHeight = res.windowHeight;

      console.log('windowWidth: ' + windowWidth) 
      console.log('windowHeight: ' + windowHeight) 

      } 
    })

    this.globalData.contentWidth = windowWidth - 10

    console.info('new width' + this.globalData.contentWidth)
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  calHeight : function (d) {
    d.newheight = this.globalData.contentWidth * d.height / d.width;
  },

imageLoad: function (e) { 
  var imageSize = imageUtil(e) 
  this.setData({ 
   imagewidth: imageSize.imageWidth, 
   imageheight: imageSize.imageHeight 
  }) 
 } ,

imageUtil : function (e) { 
 var imageSize = {}; 
 var originalWidth = e.detail.width;//图片原始宽 
 var originalHeight = e.detail.height;//图片原始高 
 var originalScale = originalHeight/originalWidth;//图片高宽比 
 console.log('originalWidth: ' + originalWidth) 
 console.log('originalHeight: ' + originalHeight) 
 //获取屏幕宽高 
 wx.getSystemInfo({ 
  success: function (res) { 
   var windowWidth = res.windowWidth; 
   var windowHeight = res.windowHeight; 
  //  var windowscale = windowHeight/windowWidth;//屏幕高宽比 
   console.log('windowWidth: ' + windowWidth) 
   console.log('windowHeight: ' + windowHeight) 
  //  if(originalScale < windowscale){//图片高宽比小于屏幕高宽比 
  //   //图片缩放后的宽为屏幕宽 
  //    imageSize.imageWidth = windowWidth; 
  //    imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth; 
  //  }else{//图片高宽比大于屏幕高宽比 
  //   //图片缩放后的高为屏幕高 
  //    imageSize.imageHeight = windowHeight; 
  //    imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight; 
   
  //  } 
     imageSize.imageWidth = windowWidth - 10; 
     imageSize.imageHeight = originalHeight;
  } 
 }) 
 console.log('缩放后的宽: ' + imageSize.imageWidth) 
 console.log('缩放后的高: ' + imageSize.imageHeight) 
 return imageSize; 
} 

})