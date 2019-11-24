var cloud=require('wx-server-sdk');//云服务器
var rp = require('request-promise');//npm 各api发出请求
cloud.init();
exports.main = async(event,context)=>{
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=7052413e102d295b3ab37ff5287c763d`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=7052413e102d295b3ab37ff5287c763d`).then(html=>{
    return html;
  })
  return res;
}