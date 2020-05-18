<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: [""],
  data() {
    return {
      scroll: null,
      props:{
          probetype:{
              type:Number,
              default:0
          },
          pullUpLoad:{
              type:Boolean,
              default:true,
          }
      }
    };
  },

  components: {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probetype:this.probetype, // probetype:3,  //0.1表示不监听滚动位置，2监听但是不监听松开手惯性位置，3表示全监听
        pullUpLoad:this.pullUpLoad
    });
    this.scroll.on('scroll',(position)=>{
        console.log(position.y);
    });
    this.scroll.on('pullingUp',_=>{
        console.log('上拉加载更多');
    })
  },

  methods: {}
};
</script>
<style lang='stylus' scoped></style>