<template>
  <div
    :class="carouselClasses">
    <!-- Carousel -->
    <div
      class="el-carousel-container"
      :style="{height:height}"
      >
      <slot></slot>
    </div>
    <ul :class="indicatorsClasses">
      <!-- 有多少个carousel-item 就输出多少个indicator? -->
      <li 
        v-for="(item,index) in items" 
        :key="index"
        :class="[
          'el-carousel__indicator',
          'el-carousel__indicator--' + direction
        ]">
        <button class="el-carousel__button">
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Carousel',    //必不可少的
  data() {
    return{
      items: []   //开始为空
    }
  },
  props: {
    // 方向
    height:String,
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    // 根据方向计算
    carouselClasses() {
      const classes = ['el-carousel', 'el-carousel--' + this.direction];
      // 先摸清楚最核心的功能
      // if (this.type === 'card') {
      //   classes.push('el-carousel--card');
      // }
      return classes;
    },
    indicatorsClasses() {
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
      return classes;
    }
  },
  methods: {
    updateItems(){
      // console.log('-----')
      // console.log(this.$children) //子组件
      this.items = this.$children.filter(child => child.$options.name === 'CarouselItem');
    }
  }
}
</script>