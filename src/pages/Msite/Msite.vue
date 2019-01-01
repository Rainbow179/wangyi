<template>
<div class="msite">
  <div class="msite-top">
    <!--头部-->
    <div class="msite-header">
      <a class="logo" @click="goto('/msite')"></a>
      <div class="msite-search" @click="goto('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder">搜索商品, 共20015款好物</span>
      </div>
      <div class="msite-button" @click="goto('/login')">登录</div>
    </div>
    <!--导航部分-->
    <div class="msite-nav">
      <ul class="list">
        <li class="active">推荐</li>
        <li>居家</li>
        <li>鞋包配饰</li>
        <li>服装</li>
        <li>电器</li>
        <li>洗护</li>
        <li>饮食</li>
        <li>餐厨</li>
        <li>婴童</li>
        <li>文体</li>
        <li>特色区</li>
      </ul>
      <div class="toggle">
        <div class="icon">
        </div>
      </div>
    </div>
  </div>
  <!--内容区-->
  <!--1.轮播-->
  <div class="msite-swiper swiper-container">
    <ul class="slide-list swiper-wrapper">
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/5c34dc433aabb6f237dc726ae6087c5f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/22c9df75da89c6a8ea7aa99287fb5d67.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/0dde49bdc6a317125c1a051a81cce8d4.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/df6d04118fb06870b7d01b868dac7829.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/96cf611743d7b382c11031f29152fa04.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
      <li class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
  <!--说明-->
  <div class="msite-text">
    <ul class="text-list">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>

</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    methods: {
      //定义一个goto点击事件方法,用来点击跳转页面
      goto(path){
        this.$router.replace(path)
      },
    },

    mounted(){
      let mySwiper = new Swiper('.swiper-container', { // 配置对象
        loop: true, // 循环轮播
        autoplay:true,//自动轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .msite
    width 100%
    height 100%
    //头部样式
    .msite-top
      position fixed
      z-index 100
      width 100%
      height 2rem
      background-color white

      .msite-header
        position relative
        left:0
        height 1.17rem

        .logo
          position absolute
          top 0.3rem
          left 0
          display inline-block
          margin-left: .26667rem
          width: 1.84rem;
          height: .53333rem;
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-repeat no-repeat
        .msite-search
          position absolute
          top 0.2rem
          left 2.35rem
          width 6rem
          height .74667rem
          text-align center

          background #ededed
          font-size: .37333rem
          border-radius: .10667rem
          color #666
          .iconfont
            width: .37333rem;
            height: .37333rem;
            font-size .6rem

        .msite-button
          position absolute
          top 0.3rem
          right 0.4rem
          width: .98667rem;
          height: .53333rem
          line-height .53333rem
          text-align center
          font-size: .32rem
          color red
          border 1px solid red
          border-radius .10667rem


      .msite-nav
        width 100%
        height .853rem
        line-height .853rem
        text-align center
        overflow hidden
        .list
          width 100%
          height 100%
          clearFix()
          li
            float left
            font-size .37333rem
            margin 0 .4rem
            &.active
              color red
              border-bottom 3px solid red
        .toggle
          position absolute
          top 1.2rem
          right: 0
          width 1.33333rem
          height .8rem
          text-align center
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
          background-repeat no-repeat
          background-position center


     //轮播图样式
    .msite-swiper
      height 4.93333rem
      width:100%
      position relative
      top 2rem
      .slide-list
        width 1000%
        height 100%
        clearFix()
        li
          float left

</style>

