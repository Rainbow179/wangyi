<template>
  <div class="wrap" style="background-color: white">
    <div class="wrap-main">
      <Header></Header>
      <!--中间部分-->
      <div class="login" v-if="$route.path==='/profile'">
        <div class="pic">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="phone" @click="$router.replace('/profile/phone')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登陆</span>
        </div>
        <div class="email" @click="$router.replace('/profile/email')">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登陆</span>
        </div>
        <div class="fast">
          <span>手机号快速注册</span>
          <i class="iconfont icon-right"></i>
        </div>
        <div>
        </div>
      </div>
      <!--底部-->
      <div class="bt" v-if="$route.path==='/profile'">
        <div class="weixin">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="QQ">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
      <!--登陆页面-->
      <div class="login" style="background-color: white">
        <RouterView/>
      </div>
    </div>
  </div>

</template>
<script>
  import Header from './Header/Header.vue'
  export default {
    data(){
      return{

      }

    },
    components:{
     Header,
    },

    methods: {
      goto(path){
        this.$router.push(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    width 100%
    height 100%
    .wrap-main
      width 100%
      height 100%
      .login
        width 100%
        .pic
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem
          img
            width: 3.57333rem;
            height: 1.2rem
        .phone
          width 80%
          height: 1.25333rem;
          text-align: center
          line-height: .7rem
          background #b4282d
          border-radius .05rem
          margin-left 1rem
          margin-bottom .42667rem
          span
            color white
            font-size .4rem
          .icon-shouji
            color white
            font-size .48rem

        .email
          width 80%
          height: 1.25333rem;
          text-align: center
          line-height: .7rem
          border 1px solid #b4282d
          border-radius .05rem
          margin-left 1rem
          span
            color #b4282d
            font-size .4rem
          .icon-youxiang
            color #b4282d
            font-size .48rem

        .fast
          width 80%
          height: 1.25333rem;
          text-align: center
          line-height: .7rem
          margin-left 1rem
          span
            color black
            font-size .4rem
          .icon-right
            color black
            font-size .42rem



      .bt
        position relative
        bottom -4rem
        left 2rem
        width 100%
        height: .53333rem
        font-size .37333rem
        color #7F7F7F
        .weixin
          height .6rem
          position absolute
          top 0
          left 0
          padding-right .3rem
          border-right 1px solid black
          i
            font-size .48rem
        .QQ
          height .6rem
          position absolute
          top 0
          left 2rem
          padding-right .3rem
          border-right 1px solid black
          i
            font-size .6rem

        .weibo
          height .6rem
          position absolute
          top 0
          left 4rem
          i
            font-size .48rem

</style>

