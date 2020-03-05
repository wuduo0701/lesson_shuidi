// 实例化对象
new Vue({
  el: '#app',
  data:{
    changeColor: false,
    changeLength: false
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
    }
  },
  computed:{
    // compClasses:function(){
    //   return{
    //     changeColor: this.changeColor
    //   }
    // }

  }
})