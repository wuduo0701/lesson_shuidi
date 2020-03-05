// x => x*x;
// x => {
//   if (x > 0) {
//       return x * x;
//   }
//   else {
//       return - x * x;
//   }
// }
var now = new Date()
//获取当地时间
console.log(now.toLocaleString());
console.log(now.toUTCString())
console.log(now)
var today = new Date();
if (today.getMonth() === 2 && today.getDate() === 2) {
    console.log('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
}