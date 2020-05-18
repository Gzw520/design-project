<template>
  <div id="search">
    <Nav>
      <div slot="back" @click="back()">
        <van-icon name="arrow-left" color="#fff" size="40" class="left-icon" />
      </div>
      <div slot="title">美食搜索</div>
    </Nav>
    <van-search
      id="fixed"
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
      @onSearch="onSearch"
      autofocus
    />
    <van-card
      v-for="(item,index) in search(value)"
      :key="index"
      :price=item.price
      :desc=item.description
      :title=item.shopname
      :thumb=item.img
    >
      <template #footer>
        <van-button type="info" size="mini" color="orangered">查看详情</van-button>
        <van-button type="info" size="mini" color="orangered">加入购物车</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import { searchData } from "./net/test";
export default {
  name: "",
  props: [""],
  data() {
    return {
      value: "",
      searchList: [],
      showList:true,
    };
  },

  components: {
    Nav
  },

  computed: {},

  mounted() {
    searchData().then(res => {
      this.searchList = res.data.result;
    });
  },

  methods: {
    onSearch(val) {
      this.$Toast(val);
    },
    back() {
      this.$router.go(-1);
    },
    search(value){
        //方法一
        if(value==''){
            return
        }
        var newList=[]
        this.searchList.forEach(item=>{
            if(item.shopname.indexOf(value)>-1){
                newList.push(item)
            }
        })
        return newList

        //方法二
        // return this.searchList.filter(item=>{
        //     if(item.shopname.includes(value)){
        //         return item
        //     }
        // })
    }
  }
};
</script>
<style lang='stylus' scoped>
#search {
  .left-icon {
    margin-top: 0.1rem;
  }
}
</style>