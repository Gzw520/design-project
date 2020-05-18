<template>
  <div id="nav">
    <slot name="back"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>

  export default {
    props:[''],
    data () {
      return {

      };
    },

  }

</script>
<style lang='stylus' scoped>
#nav
    height 0.88rem
    width 100%
    background #F56C6C 
    display flex
    position fixed
    top 0
    z-index 10
    div
        &:nth-of-type(1)
            width 1rem
            height 100%
            position absolute 
            left 0
            top 0
            img 
                width 0.5rem
                height 0.5rem
                margin 0.2rem 0 0 0.1rem
        &:nth-of-type(2)
            flex 1
            text-align center
            line-height 0.88rem
            color #ffffff
            font-size 0.35rem
            font-weight 600
</style>