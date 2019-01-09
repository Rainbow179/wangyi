<template>
  <div class="wrap">
    <div class="wrap-main">
      <!--头部-->
      <div class="header">
        <div class="header-tap">
          <div class="iconfont icon-zhuye" @click="goto('/msite')"></div>
          <div class=header-txt>
            <a href="##" @click="change(1)" :class="current===1 ? 'on' : ''">发现</a>
            <a href="##" @click="change(2)" :class="current===2 ? 'on' : ''">甄选家</a>
          </div>
          <div class="iconfont icon-gouwuche" @click="goto('/cart')"></div>
          <div class="iconfont icon-sousuo" @click="goto('/search')"></div>
        </div>
        <!--导航-->
        <div class="header-nav-wrapper">
          <ul class="header-nav">
            <li class="header-nav-item" v-for="(nav,index) in navTab" :key="index">
              <RouterLink :to="`/Shiwu/navTab/${index}`">
                <span>{{nav.tabName}}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
      <XuanMei></XuanMei>


    </div>
  </div>
</template>
<script>

  import{mapState} from 'vuex'
  import xuanmei from '../../components/xuanmei/xuanmei.vue'

  export default {

    data(){
      return{
        current:1,
        ins:0
      }
    },
    components:{
      XuanMei:xuanmei
    },

    methods: {
      goto(path){
        this.$router.push(path)
      },
      //切换样式 发现 甄选家
      change:function(a){//传入参数这里指1、2
        this.current=a;//current==1 or current==2
      },
      getIndex(index){
       return this.ins=index
      }
    },

    computed:{
      ...mapState({
        navTab:state=>state.shiwu.navTab
      })

    },

    mounted(){
      this.$store.dispatch('getNavTab')
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    width 100%
    height 100%
    .wrap-main
      width 100%
      height 100%
       //头部样式
      .header
        position fixed
        height 1.17333rem
        width 100%
        background-color white
        .header-tap
          position fixed !important
          z-index 100
          height 1.17333rem
          width 100%
          font-size .6rem
          border-bottom 1px solid #eee
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

          .header-txt
            position absolute
            left 3.5rem
            top .3rem
            color #333
            font-size .5rem
            a
              display inline-block
              &.on
                color red
                font-size .6rem
                font-weight 700



          // 头部导航
        .header-nav-wrapper
          width 100%
          height: 1rem;
          line-height 1rem
          margin-top 1rem
          background: #fafafa;
          border-bottom: .01rem solid #d9d9d9;
          .header-nav
            display flex
            height: 1rem;
            .header-nav-item
              flex 1
              font-size: .36rem;
              text-align center
              &.active
                color: #B4282D;
                border-bottom: .04rem solid #B4282D;
                span
                  color: #B4282D;




</style>

