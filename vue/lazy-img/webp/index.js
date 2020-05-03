// const webp = require('webp-converter');
// webp.cwebp("test.jpg", "test.webp", "-q 80",
//  function(status, error) {
//   console.log(status, error);
// })

//原图10% 左右的轮廓，lazyload加载完成后  替换上去
// img scr -> loading.gif logo

const lqip = require('lqip'); 
const file = './aa.jpg';
lqip
  .base64(file)
  .then(res => {
    console.log(res);
  });