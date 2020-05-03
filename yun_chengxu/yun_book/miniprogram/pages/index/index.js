Page({
  scanCode(){
    wx.scanCode({
      onlyFromCamera:true,
      scanType:['barCode'],
      success:res=>{
        let isbn = res.result;
        // isbn ->到云里查询
        // 委派一朵云去查API
        wx.cloud.callFunction({
          name:'booinfo',
          data:{
            isbn:isbn
          },
          success:res=>{
            console.log(res.result);
          }
        })
    }
  })
}
})