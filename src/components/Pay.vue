<template>
  <div id="pay">
      <Nav>
          <div slot="back"></div>
          <div slot="title">支付中心</div>
      </Nav>
    <div class="show" v-if="infoLength">
        <div class="pay-con" v-for="(pay,index) in Info" :key="index">
          <h1>请核对你的就餐信息</h1>
            <Scroll class="content">
                  <div class="table">
              <h3>桌号：</h3>
              <h4>{{pay.table}}</h4>
          </div>
          <div class="table">
              <h3>备注：</h3>
              <h4 id="special">{{pay.name}}</h4>
          </div>
          <div class="table">
              <h3>人数：</h3>
              <h4>{{pay.num}}人</h4>
          </div>
          <div class="greens" v-for="(menu,index) in cartNum" :key="index">
              <h3>{{menu.shopname}}</h3>
              <h4>×{{menu.value}}</h4>
          </div>
            </Scroll>
      </div>
    <van-button round type="info" @click="dia()" class="btn">支 付</van-button>
    </div>
    <van-empty description="客官，你还没有点餐了……" v-else/>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Scroll from '../components/scroll/Scroll'
import { mapGetters} from 'vuex'
  export default {
    props:[''],
    data () {
      return {

      };
    },

    components: {
        Nav,
        Scroll
    },

    computed: {
        ...mapGetters(["Info","infoLength","cartNum"])
    },


    mounted() {},

    methods: {
        dia(){
            this.$dialog.confirm({
                title:'确认支付',
                message:'你的订单信息是否正确？'
            }).then(_=>{
                console.log('我的心在颤抖');
            }).catch(_=>{
                console.log('来自天堂的魔鬼');
            })
        },
    },


  }

</script>
<style lang='stylus' scoped>
#pay
    .pay-con
        width 7rem
        height 9rem
        margin 0.5rem auto
        border 1px solid #ddd
        .greens
            width 5rem
            height 0.5rem
            display flex
            margin 0.2rem auto
            justify-content space-between
            border-bottom 1px solid #abcdef
        .table
            width 5rem
            height 0.5rem
            display flex
            margin 0.2rem auto
            justify-content space-between
            border-bottom 1px solid #abcdef
        h4
            margin-right 0.5rem
            color #888
            font-size 0.24rem
            line-height .5rem
        h3
            font-size 0.28rem
h1
    width 7rem
    text-align center
    height 0.7rem
    line-height .7rem
    color orangered 
    font-size 0.26rem
.btn
    width 2rem
    height .7rem
    line-height .7rem
    margin-left 2.5rem
#special
    font-size .1rem !important 
.content
    height 8rem
    overflow hidden
</style>