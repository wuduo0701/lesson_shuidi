const TULING = require('tuling');

const aiTuling = new TULING({
    key: '970e20f9290742779232d03c16ac64df'
});

//立即执行函数

 (async () => {     
     //async使用机器人
   // console.log("asd");
   const result = await aiTuling.send({
       userid:1,
       info:'今天的天气',
       loc:'南昌市 '
   });
   console.log(result);

})() 
// console.log(func);
