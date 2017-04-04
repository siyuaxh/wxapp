var app = getApp()

Page({
  data: {
    img_url:'https://www.siyuhouse.com/wxapp/coffee_enema.png',
    imgheight : 0,
    imgwidth : 0

  },
  resizeImg : function (e) {
    console.info('resizeImg') ;

    var originalWidth = e.detail.width;//图片原始宽 
    var originalHeight = e.detail.height;//图片原始高 
    var value = {}
    value.height = originalHeight;
    value.width = originalWidth;
    value.newheight = 0;
    app.calHeight(value)
    console.info('img newheight : ' + value.newheight) ;
    
    this.setData({ 
        imgheight: app.globalData.contentWidth, 
        imgwidth: value.newheight 
    });
    //console.info('img size,' + imgheight + ',' + imgwidth) 

  }
}
)