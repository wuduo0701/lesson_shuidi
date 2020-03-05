// 实例化对象
new Vue({
  el: '#app',
  data:{
    changeColor: false,
    changeLength: false,
    error: false,
    success: false,
    users:[
      {name:"lin",age:"18"},
      {name:"jia",age:"19"},
      {name:"hao",age:"20"}
    ],
    object:{
      name:"朵雾",
      title:"今年20岁",
    },
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  methods:{
    // a:function(){
    //   this.$emit.changeColor = !this.changeColor;
    // }
    compClasses:function(){
      return{
        changeColor: this.changeColor,
        changeLength: this.changeLength
      }
    },
    // push(){
    //   app.items.push
    // }
  },
  computed:{
    // compClasses:function(){
    //   return{
    //     changeColor: this.changeColor
    //   }
    // }
    // evenNumbers:function(){
    //   return this.numbers.fliter((number) =>{
    //     return number % 2 === 0
    //   })
    // },
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})