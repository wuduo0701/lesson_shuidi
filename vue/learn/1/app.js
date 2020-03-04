//实例化vue对象
new Vue({
  el: "#vue-app",
  data: {
    x:0,
    y:0,
    age:"",
    name: "",
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
    },
    // refs的使用也可以实现双向数据绑定
    logname:function(){
      this.name = this.$refs.name.value;
    },
    logage:function(){
      this.age = this.$refs.age.value;
    }
  }
});
/**
 * el: element 需要获取的元素,一定是容器的根元素
 */