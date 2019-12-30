<template>
    <ul class="switches">
        <li v-for="(item,index) in switches" :key="item.id" class="switch-item" :class="{'active' : currentIndex === index}" @click="switchItem(index)">
            <span>{{item.name}}</span>
        </li>
    </ul>  
</template>

<script>
export default {
    props: {
        switches: {
            type: Array,
            required: true
        },
        currentIndex: {
            type: Number,
            default: 0
        }
    },
    methods:{
        switchItem(index) {
            this.$emit('switch', index)          //可以改传过来的数据
        }
    }
}
</script>

<style lang="stylus">
@import "../../common/styl/variable"
.switches
    display flex
    align-items center
    width 240px
    margin 0 auto 
    .switch-item
        flex 1
        padding 8px
        margin 0 20px
        text-align center
        font-size $font-size-medium-x
        color $color-text-l
        border-bottom 2px solid $color-theme
        &.active
            color #fff
            border-bottom 2px solid $color-text-l

</style>