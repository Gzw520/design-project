<template>
  <div class="home">
    <Nav>
      <div slot="back"></div>
      <div slot="title">香满楼</div>
    </Nav>
    <van-search
      id="fixed"
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
      @onSearch="onSearch"
    />
    <van-card
      v-for="(item,index) in search(value)"
      :key="index"
      :price="item.price"
      :desc="item.description"
      :title="item.shopname"
      :thumb="item.img"
    >
      <template #footer>
        <van-button
          type="info"
          size="mini"
          color="orangered"
          :to="'/order?shopname='+item.shopname"
        >查看详情</van-button>
        <van-button
          type="info"
          size="mini"
          color="orangered"
          @click="Addcart(1,item.img,item.shopname,item.price)"
        >加入购物车</van-button>
      </template>
    </van-card>
    <van-empty description="客官，本店暂没有你想要美食" v-if="empty" />
    <Scroll class="content" ref="scroll">
      <Type v-show="typeshow" />
    </Scroll>
  </div>
</template>

<script>
import bus from "../../src/bus";
import Nav from "../components/Nav";
import Type from "../components/Type";
import Scroll from '../components/scroll/Scroll';
import { searchData, cartData } from "../components/net/test";

export default {
  data() {
    return {
      value: "",
      tabshow: false,
      tabhidden: true,
      typeshow: true,
      searchList: [],
      empty: false
    };
  },
  components: {
    Nav,
    Type,
    Scroll
  },
  methods: {
    onSearch(val) {
      this.$Toast(val);
    },
    fixed() {
      //解决手机键盘弹起因为fixed布局顶乱页面
      let that = this;
      var Input = document.getElementById("fixed");
      Input.onblur = function() {
        bus.$emit("tabshow", that.tabhidden);
        that.typeshow = true;
        that.empty = false;
      };
      Input.onfocus = function() {
        bus.$emit("tabhidden", that.tabshow);
      };
    },
    search(value) {
      //方法一
      if (value) {
        this.typeshow = false;
        this.empty = false;
      } else {
        return;
      }
      var newList = [];
      this.searchList.forEach(item => {
        if (item.shopname.indexOf(value) != -1) {
          newList.push(item);
        }
        if (newList.length == 0) {
          this.empty = true;
        }
      });
      return newList;
      //方法二
      // return this.searchList.filter(item=>{
      //     if(item.shopname.includes(value)){
      //         return item
      //     }
      // })
    },
    Addcart(num, img, name, price) {
      cartData(num, img, name, price).then(res => {
        if ((res.data.success = true)) {
          const product = {};
          product.value = num;
          product.img = img;
          product.shopname = name;
          product.price = price;
          //加入到vuex中
          // this.$store.commit('addCart',product)
          this.$store.dispatch("addCart", product);
          this.$toast.success("加入成功！");
        }
      });
    }
  },
  mounted() {
    this.fixed();
    searchData().then(res => {
      this.searchList = res.data.result;
      // console.log(this.searchList);
    });
  }
};
</script>
<style lang="stylus" scoped>
.content
  height 10.5rem
  overflow hidden
</style>
