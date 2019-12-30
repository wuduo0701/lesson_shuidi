<template>
  <div id="app">
    <div class="user">
      <!-- @click相当于v-on:click -->
      <div class="back" @click="back">  
        <!-- i标签用来放图标的 -->
        <i class="fa fa-angle-left">    
        </i>
      </div>
      <div class="swithches-wrapper">
        <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"/>
      </div>
    </div>
  </div>
</template>

<script>
import Switches from "./components/switches/switches";
//模块输出
export default {
  data(){
    return {
      currentIndex:0,
      switches:[
        {
          name:'我的收藏'
        },
        {
          name:'最近播放'
        }
      ]
    }
  },
  methods:{
     back(){
    console.log('回上一页');
    },
    switchItem(index){
      this.currentIndex = index;
    }
  },
 components: {
   'switches': Switches
 }
}
</script>

<style lang="stylus">
@import "./common/styl/reset";
@import "./common/styl/variable";
.user
  position  fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 100
  background  $color-backgroud
  .back
    position absolute
    top 0
    left 4px
    .fa-angle-left   //&引用上一级元素
      padding 5px 10px
      font-size 30px
      color #fff
      &:before
        content "\F104"
  .swithches-wrapper
    display flex
    align-items center
    background red
    height 44px
        
.fa
  display inline-block
  //  /1是行高为1
  font normal normal normal 14px/1 FontAwesome
  font-size inherit 
  text-rendering auto 
  -webkit-font-smoothing antialiased 


@font-face {
  font-family: 'FontAwesome';
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot');
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff2') format('woff2'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff') format('woff'),
    url('./common/font-awesome/fonts/fontawesome-webfont.ttf') format('truetype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
