<template>
  <!--头部-->
  <div class="header">
    <div class="header-tap">
      <div class="iconfont icon-zhuye" @click="goto('/msite')"></div>
      <div class="iconfont icon-gouwuche" @click="goto('/cart')"></div>
      <div class="iconfont icon-sousuo" @click="goto('/search')"></div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //头部样式
  .header
    height 1.17333rem
    width 100%
    background-color white
    background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
    background-repeat no-repeat
    background-size 2.3rem
    background-position center
    border-bottom 1px solid #7e8c8d
    .header-tap
      position fixed
      z-index 100
      height 1.17333rem
      width 100%
      font-size .6rem
      .icon-zhuye
        position absolute
        top .2rem
        left .2rem
        font-size .6rem
      .icon-sousuo
        position absolute
        top -.1rem
        right 1.3rem
        font-size 1rem
        color #7e8c8d
      .icon-gouwuche
        font-size .7rem
        position absolute
        top .2rem
        right .3rem
        color #7e8c8d

</style>

