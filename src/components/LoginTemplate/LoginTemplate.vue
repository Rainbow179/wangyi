<template>
  <div class="login-connent">
    <div class="logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="loginType" >
      <input class="loginPhone" type="tel" maxlength="11" :placeholder="loginInfo.MsgType" v-model="loginInfo.phone">
    </div>
    <div class="loginPsw">
      <input class="psw" type="password" maxlength="6" :placeholder="loginInfo.pswMsg" v-model="loginInfo.code">
      <slot name="getCode"></slot>
    </div>
    <div class="otherMsg">
      <span class="left">{{loginInfo.leftInfo}}</span>
      <span class="right" @click="$router.replace('profile/phone/2}')">{{loginInfo.rightInfo}}</span>
    </div>
    <div>
      <div class="login2">登陆</div>
      <div class="loginOther" @click="$router.replace('/profile')">其它登陆方式</div>
      <slot name="register"></slot>
    </div>

  </div>
</template>
<script>
  export default {
    props:{
      loginInfo:Object
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-connent
    width: 100%
    height 100%
    text-align center
    box-sizing border-box
    .logo
      padding-top: .74667rem;
      margin-bottom: 1.8rem;
      img
        width: 2.56rem;
        height: .85333rem;
    .loginType
      position relative
      left 0
      top 0
      width 90%
      .loginPhone
        width 100%
        height: 1.2rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem .45rem;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline none
        border-bottom 1px solid #bdbdbd
        &::-webkit-input-placeholder
          font-size: .36rem

    .loginPsw
      position relative
      left 0
      top 0
      display inline-block
      width: 90%
      .psw
        width 100%
        height: 1.2rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline none
        border-bottom 1px solid #bdbdbd;
        &::-webkit-input-placeholder
          font-size: .36rem



    .otherMsg
      height: 0.6rem;
      line-height: 0.6rem;
      color: #7f7f7f !important;
      font-size: 0.38rem;
      display flex
      justify-content space-between
      padding .4rem .4rem
      .right
        color: #000

    .login2
      width: 90%
      display inline-block
      margin .42667rem 0
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: .37333rem;
      color: #fff;
      border: 1px solid #b4282d;
      background-color: #b4282d;
      border-radius: 4px;
    .loginOther
      width: 90%
      display inline-block
      margin-bottom .4rem
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: .37333rem;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: 4px
</style>

