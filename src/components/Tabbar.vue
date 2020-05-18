<template>
  <div id="tab"  v-if="$route.meta.footer">
    <van-tabbar v-model="active" class="tab-bar" v-show="tabshow">
        <van-tabbar-item icon="new" replace to="/">点餐</van-tabbar-item>
        <van-tabbar-item icon="bars" replace to="/home">菜单</van-tabbar-item>
        <van-tabbar-item icon="cart" :badge=cartNum replace to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="balance-list" replace to="/pay">订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import bus from '../../src/bus'
  export default {
    props:{

    },
    data () {
      return {
          active:0,
          tabshow:true,
          cartNum:''
      };
    },
    methods:{},
    mounted() {
      bus.$on('tabhidden',data=>{
        this.tabshow=data
      })
      bus.$on('tabshow',data=>{
        this.tabshow=data
      })
      bus.$on('cartNum',data=>{
        this.cartNum=data
      })
      bus.$on('tit',data=>{
        this.active=data
      })
      bus.$on('paytit',data=>{
        this.active=data
      })
    },
  }

</script>
<style lang='stylus' scoped>
#tab
  position relative
  // height 100%
  bottom 0
  .tab-bar
      position fixed
      bottom 0
      left 0
      height 0.88rem
      width 100%
      border-top 1px solid #ddd
      z-index 10
      display flex
      justify-content space-around
      align-items center 
</style>