<template>
  <div id="app">
   
    <Tabbar/>
    <keep-alive include="Type"><router-view/></keep-alive>
  </div>
</template>
<script>
import Tabbar from "./components/Tabbar"
export default {
  data(){
    return {}
  },
  components:{
    Tabbar
  },
  methods:{
  },
  mounted(){
  
  },

}
</script>
<style lang="stylus">
#app
  @import "./assets/css/public.css"
#app
  width 100%
  height 100vh
  padding 0.88rem 0
  position relative
  // background pink
  overflow auto
</style>
