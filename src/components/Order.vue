<template>
  <div id="order">
    <Nav>
      <div slot="back" @click="back()">
        <van-icon name="arrow-left" color="#fff" size="40" class="left-icon"/>
      </div>
      <div slot="title">美食详情</div>
    </Nav>
    <div class="swiper">
      <van-swipe :autoplay="3500">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <h3>{{goods.price | Showprice(goods.price)}}</h3>
    <p class="des">
        {{goods.des}}
    </p>
    <div class="step">
        <p class="join-cart">选择数量：</p>
        <van-stepper v-model="value" input-width="1.5rem" button-size="0.8rem" class="con"/>
        <van-button color="orange" class="btn" @click="goCart()">加入购物车</van-button>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import bus from '../bus';

import {orderData,Goods} from './network/api'
import {cartData} from './net/test'
export default {
  name: "",
  props: [""],
  data() {
    return {
      images: [],
      value:1,
      List:'',
      name:'',
      goods:{},
      num:0
    };
  },

  components: {
    Nav
  },
  filters:{
    Showprice(price){
      return price+'元/份'
    }
  },
  computed: {},
  created(){},
  mounted() {
    this.name=this.$route.query.shopname
    orderData(this.name).then(res=>{
      this.List=res.data.result[0]
      this.goods=new Goods(this.List)
      this.images=this.goods.showList
      // console.log(this.List);
    })
  },

  methods: {
    goCart(){
      cartData(this.value,this.List.img,this.List.shopname,this.List.price).then(res=>{
        if(res.data.success=true){
          const product={}
          product.value=this.value
          product.img=this.List.img
          product.shopname=this.List.shopname
          product.price=this.List.price
          //加入到vuex中
          // this.$store.commit('addCart',product)
          this.$store.dispatch('addCart',product)
          this.$toast.success('加入成功！')
        }
      })
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang='stylus' scoped>
#order
    .swiper
        width 100%
        height 4.8rem
        img
            height 4.8rem
            width 100%
    h3
        margin 0.5rem 0 0.2rem 0.2rem
        color orangered 
        &:before
            content '价 格：'
            color #000
    .des
        color #aaa
        margin 0.8rem 0.2rem 0.5rem 0.2rem
        height 3.2rem
        position relative
        border-bottom 1px solid #abcdef
        border-top 1.5px solid #abcdef
        line-height 0.4rem
        padding-top 0.28rem
        text-indent 2em
        &:before
            content '详情描述：'
            font-size 0.28rem
            color #000
            position absolute
            top -0.5rem
            left 0
            text-indent 0
    .step       
        .join-cart
            float left
            height .8rem
            width 1.6rem
            line-height .8rem
            margin-left .2rem
            font-size .28rem
            color orangered 
            font-weight 600
        .btn
            float right
            margin-right .2rem
            height .8rem
            border-radius 7px
        .con
            float left
.left-icon
  margin-top 0.1rem
</style>