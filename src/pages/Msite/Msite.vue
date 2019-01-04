<template>
<div class="msite">
  <!--头部-->
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
    <NavScroll/>
  </div>
    <!--1.轮播-->
    <div class="swiper-container" >
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="(focus,index) in focusList" :key="index">
          <img :src="focus.picUrl" alt="">
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
    <!--说明-->
    <div class="msite-text">
      <ul class="text-list">
        <li>
          <i class="iconfont icon-duihao3"></i>
          <span class="text">网易自营品牌</span>
        </li>
        <li>
          <i class="iconfont icon-duihao3"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-duihao3"></i>
          <span class="text">48小时快速退款</span>
        </li>
      </ul>
    </div>
    <!--内容区-->
  <div class="msiteMain">
    <OneList></OneList>
    <TwoList></TwoList>
    <ThreeList></ThreeList>
    <FourList></FourList>
    <FiveList></FiveList>
  </div>

</div>


</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  import NavScroll from './NavScroll/NavScroll.vue'
  import OneList from './OneList/OneList.vue'
  import TwoList from './TwoList/TwoList.vue'
  import ThreeList from './ThreeList/ThreeList.vue'
  import FourList from './FourList/FourList.vue'
  import FiveList from './FiveList/FiveList.vue'

  let wrapper = document.querySelector('.wrapper')

  export default {
    //声明组件
    components:{
      NavScroll,
      OneList,
      TwoList,
      ThreeList,
      FourList,
      FiveList
    },
    methods: {
      //定义一个goto点击事件方法,用来点击跳转页面
      goto(path){
        this.$router.replace(path)
      }
    },
    computed:{
      //从state中拿到数据
      ...mapState({
        focusList:state=>state.msite.focusList
      })

    },
    watch:{
      navList(){
        this.$nextTick(() => {
          // 创建swiper对象的时机: 列表数据显示之后
          new Swiper('.swiper-container', { // 配置对象
            loop: true, // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

          })
        })
      }
    },
    mounted(){
      //异步获取列表信息
      this.$store.dispatch('getkingKongList',()=>{
          this.$nextTick(() => {
            new BScroll('.wrapper',{
              scrollX:true,
              click:true
            })
          })
      }),

      this.$nextTick(() => {
          // 创建swiper对象的时机: 列表数据显示之后
          new Swiper('.swiper-container', { // 配置对象
            loop: true, // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      this.$store.dispatch('getcateList'),
      this.$store.dispatch('getfocusList')
    },
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



     //轮播图样式
    .swiper-container
      height 6.933333rem
      width:100%
      .swiper-wrapper
        width 1000%
        height 4.93333rem
        margin-top 2.065rem
        clearFix()
        .swiper-slide
          float left
          white-space nowrap
          width 10%
          height 100%
          img
            width 100%
            height 100%



      //文字说明部分
    .msite-text
      background white
      .text-list
        width 100%
        height .96rem
        line-height .96rem
        clearFix()
        li
          float left
          color #B4282D
          font-size .32rem
          margin-right .5rem
          .icon-duihao3
            font-size .4rem
            margin-left .15rem



    .msiteMain
     width 100%


</style>

