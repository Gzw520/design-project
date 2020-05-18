<template>
  <div id="type">
    <div class="type-item" v-for="(type,index) in orderList" :key="index">
      <h2>{{type.tit}}</h2>
      <van-grid :column-num="3" :gutter="5">
        <van-grid-item v-for="(show,index) in type.showList" :key="index">
           <router-link :to="'/order?shopname='+show.shopname"> <img id="show-img" :src="show.img" alt=""></router-link>
            <span>
              <p>{{show.price | showPrice(show.price)}}</p>
              <p>{{show.shopname}}</p>
            </span>
        </van-grid-item>
    </van-grid>
    </div>
  </div>
</template>

<script>
import {typeData} from './network/api'
  export default {
    props:[''],
    data () {
      return {
        orderList:[]
      };
    },

    components: {},

    computed: {},

    filters:{
      showPrice(price){
        return '￥'+ parseInt(price).toFixed(2)
      }
    },
    mounted() {
      typeData().then(res=>{
      this.orderList=res.data.result;
    })
    },

    methods: {
     
    },

  }

</script>
<style lang='stylus' scoped>
#show-img 
    width 100px
    height 100px
.type-item
  h2
    width 2.5rem
    height 0.8rem
    padding-left 0.8rem
    text-align center
    line-height 0.8rem
    font-size 0.4rem
    font-weight 600
    border-bottom 0.02rem solid orangered
    background url(../assets/img/main.svg) 0.3rem .1rem no-repeat 
    background-size 0.6rem 0.6rem
    margin 0.1rem auto
    color #d4237a
p
  color #000
  text-align center
  &:nth-of-type(1)
    color red
    font-size 0.28rem
    margin-top 0.15rem
    font-weight 600
  &:nth-of-type(1)
    margin-top 0.15rem
</style>