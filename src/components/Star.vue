<template>
  <div id="home">
      <Nav>
          <div slot="back"></div>
          <div slot="title">欢迎光临</div>
      </Nav>
      <van-notice-bar speed=80 text="亲爱的客官朋友，你好！为了你和他人的就餐方便，请爱护公共环境及个人卫生，如果菜品质量以及个人订单出现问题，请及时到前台咨询，保管好你的个人财产，如有遗失，本店概不管理，谢谢配合！" left-icon="volume-o" color="#1989fa" background="#ecf9ff" />
      <div class="logo">
          <!-- <img src="../assets/img/cj.svg" alt=""> -->
          <img src="http://img4.imgtn.bdimg.com/it/u=2073494254,1202358144&fm=26&gp=0.jpg" alt="">
          <p>客官，请选择您的用餐信息</p>
      </div>
    <ul>
        <li v-for="(item,index) in 12" :key="index" @click="peopleNum(index)" :class="{peopleActive:index===currentIndex}" ref="num">
            {{item}}
        </li>
    </ul>
    <div class="mes">
      <div class='mark'>
        <input type="text" placeholder="请选择备注信息" disabled v-model="message">
        <van-icon name="close" size="15" class='clear' @click="clear()"/>
        <div class="table">
          <p class="txt">桌号：</p>
          <van-stepper v-model="value" class="ta-con"/>
        </div>
      </div>
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" cancel-text="取消" @cancel="onCancel"/>
      <div class="btn">
        <van-button round type="info" @click="test()" size="small">备注信息</van-button>
        <van-button round type="info" @click="food(1)" size="small">开始点餐</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav"
import bus from '../bus'
  export default {
    props:[''],
    data () {
      return {
        value:1,
         show: false,
         clickNum:'',
          actions: [
            { name: '微辣' },
            { name: '不要辣椒' },
            { name: '啤酒冰镇' },
            { name: '打包带走' },
            { name: '开水', subname: '（根据用餐人数赠送）' },
            { name: '餐纸', subname: '（赠送：1包/桌）' },
            { name: '围裙', subname: '（根据用餐人数服务）' },
              ],
            currentIndex:0,
            message:'',
            }
    },

    components: {
        Nav,
    },

    computed: {},
    mounted() {},
    methods: {
     test(){
       this.show=true
     },
      onSelect(item) {
      this.show = false;
      console.log(item.name);
      this.message=item.name+'/'+this.message
    },
    onCancel() {
      this.show = false;
    },
    peopleNum(index){
      this.currentIndex=index
      this.clickNum=this.$refs.num[index].innerText
      // console.log(this.clickNum);
    },
    food(index){
      this.$dialog.confirm({
                title:'确认信息',
                message:'你的就餐人数和桌号是否正确？'
            }).then(_=>{
                const Info={}
                Info.num=this.clickNum
                Info.name=this.message
                Info.table=this.value
                this.$store.dispatch('addInfo',Info)
                this.$router.push('/home')
                bus.$emit('tit',index)
            }).catch(_=>{
                this.$router.go(0)
            })
    },
    clear(){
      this.message=''
    }
    },
  }

</script>
<style lang='stylus' scoped>
.logo
    width 7rem
    height 0.8rem
    margin 1rem auto 0.5rem
    img 
        width 1rem
        height 1rem
        float left
        margin-left 1rem
    p
        float left
        text-align center
        line-height 1.5rem
        font-size 0.28rem
        margin-left 0.3rem
        color red
ul
    width 7rem
    height 5rem
    display flex
    justify-content center
    flex-wrap wrap
    align-items space-around
    margin 0.2rem auto 0
    li
        width 1.5rem
        height 0.7rem
        border 0.01rem solid #aaa
        flex-shrink 0
        margin 0 0.05rem
        text-align center
        line-height 0.8rem
        font-size 0.3rem
        font-weight 600
        border-radius 0.2rem
.btn
  display flex
  justify-content space-between
  align-items center
  height 2rem
  width 6.2rem
  margin 0 auto
.peopleActive
  background orangered 
  color #fff
  border none 
.mark
  position relative
  width 100%
  display flex
  justify-content space-around
  input 
    height 0.6rem
    width 2.5rem
    border #aaa 1px solid 
    background #fff
    padding 0.15rem
    border-radius 0.1rem
  .clear
    position absolute 
    top 0.15rem
    right 4.5rem
  .table
    display flex
    align-items center
</style>