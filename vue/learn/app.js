//实例化vue对象
new Vue({
  el: "#vue-app",
  data: {
    x:0,
    y:0,
    age:30,
    name: "lin",
    webtag:"<a href='https://www.bilibili.com/video/av44699553?p=5'>bilibili</a>",
    website:"https://www.bilibili.com/video/av44699553?p=5"
  
  },
  methods:{
    add: function(){
      this.age++;
    },
    subtract:function(){
      this.age--;
    },
    updataXY:function(event){
      //可以获取事件具体值
      // console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
/**
 * el: element 需要获取的元素,一定是容器的根元素
 */