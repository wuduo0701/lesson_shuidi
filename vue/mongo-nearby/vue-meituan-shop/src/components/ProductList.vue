<template>
    <div>

    </div>
</template>
<style  scoped>

</style>
<script>
export default {
  created(){  //比mounted更早的周期，mounted是实例挂载的时候
  this.$store.dispatch('products/getAllProducts')
  }
}
</script>W