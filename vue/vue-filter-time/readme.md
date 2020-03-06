- express 结合 Mongodb(mongoose)的后台使用

  数据存储及查看 ，时间的调用
  - 了解了时间戳
  - 计算两个时间的间隔，可以精确到秒(moment.js)
  var seconds = moment("2020-3-6","YYYY-MM-DD HH:mm:ss").diff(moment(todo.start,"YYYY-MM-DD HH:mm:ss"),"seconds")


