<template>
  <div id="cart">
    <Nav>
      <div slot="back" @click="back">
        <van-icon name="arrow-left" color="#fff" size="40" class="left-icon" />
      </div>
      <div slot="title">购物车</div>
    </Nav>
    <div class="con" v-if="cartLength">
      <Scroll class="content">
        <div class="card">
          <van-card
            v-for="(cartItem,index) in cartNum"
            :key="index"
            :num="cartItem.value"
            :price="cartItem.price"
            :title="cartItem.shopname"
            :thumb="cartItem.img"
          >
            <template #footer>
              <van-button size="mini" @click="add(index)">增加</van-button>
              <van-button size="mini" @click="dec(index)">减少</van-button>
            </template>
          </van-card>
        </div>
      </Scroll>
      <div class="sub">
        <p>
          合 计：
          <span>{{totalPrice|allPrice(totalPrice)}}元</span>
        </p>
        <p @click="goPay(3)">提交订单</p>
      </div>
    </div>
    <van-empty
      v-else
      class="custom-image"
      image="http://hbimg.b0.upaiyun.com/efaeafb7fab6d05097caf8336c6e37449bd08b1260e20-vxKLxJ_fw658"
      description="客官，您的购物车空空如也，快去添加……"
    />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import bus from "../bus";
import Scroll from "../components/scroll/Scroll";
import { cartFind, cartAdd, cartDec } from "../components/net/test";
import { mapGetters } from "vuex";

export default {
  props: [""],
  data() {
    return {};
  },

  components: {
    Nav,
    Scroll
  },

  mounted() {
    // cartFind().then(res => {
    //   this.cartList=res.data.result
    //   if(this.cartList.length==0){
    //     this.show=false
    //   }
    // });
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.cartNum.length; i++) {
        totalPrice += parseInt(this.cartNum[i].price * this.cartNum[i].value);
      }
      return totalPrice;
    },
    ...mapGetters(["cartNum", "cartLength"])
  },
  filters: {
    allPrice(price) {
      return "￥" + parseInt(price).toFixed(2);
    }
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    add(index) {
      this.cartNum[index].value++;
      cartAdd(this.cartNum[index].shopname).then(res => {
        console.log(res);
      });
    },
    dec(index) {
      cartDec(this.cartNum[index].shopname).then(res => {
        console.log(res.data);
      });
      if (this.cartNum[index].value == 1) {
        this.cartNum.splice(index, 1);
        // this.$router.go(0)  //强制路由刷新
      } else {
        this.cartNum[index].value--;
      }
    },
    goPay(index) {
      this.$router.push("/pay");
      bus.$emit("paytit", index);
    }
  }
};
</script>
<style lang='stylus' scoped>
.left-icon
  margin-top 0.1rem
.card
  min-height 9rem
  width 7rem
  margin 0 auto 1rem
.sub
  height 1rem
  width 100%
  position fixed
  bottom 0.9rem
  background #fff
  p
    width 2.3rem
    height .8rem
    float left
    font-weight 600
    font-size 0.3rem
    text-align center
    line-height .9rem
    border-radius 0.15rem
    &:nth-of-type(1)
      margin-left 1.5rem
      font-weight 100
      line-height .9rem
      width 3rem
      span 
        color red
        font-style italic
    &:nth-of-type(2)
      float right
      color #ffffff
      margin-right 0.5rem
      border-radius 0.9rem
      background orangered
      margin-top 0
.custom-image
  .van-empty__image 
    width: 190px;
    height: 190px;
    margin-top 2rem
.content
  height 10.5rem
  overflow hidden
</style>