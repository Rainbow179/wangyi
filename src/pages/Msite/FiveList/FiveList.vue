<template>
  <div class="fivelist">
    <!--上-->
    <div class="listtop">
      <div  class="t-left">
        人气推荐
      </div>
      <div class="t-right">
        <a href="##">
          更多
          <i class="iconfont icon-right"></i>
        </a>

      </div>
    </div>
    <!--下-->
    <div class="listbottom">
      <div class="listbottom-big">
        <a href="##">
          <div class="list-pic">
            <img src="http://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png?imageView&quality=65&thumbnail=280x280">
          </div>
          <div class="list-txt">
            <div class="title">
              限时特惠
            </div>
            <div class="name">
              男士轻薄无缝羽绒服
            </div>
            <div class="des">
              一体无缝设计,大气温暖防钻绒
            </div>
            <div class="price">
              $666
            </div>

          </div>
        </a>
      </div>
      <div class="listbottom-small">
        <a href="##">
          <div class="list-pic">
            <img src="https://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" class="img">
          </div>
          <div class="list-txt">
            <div class="des">升级款95%白鹅绒秋冬加厚... </div>
            <div class="price">$889</div>
            <div class="fuli">三石福利价</div>

          </div>
        </a>
        <a href="##">
          <div class="list-pic">
            <img src="https://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" class="img">
          </div>
          <div class="list-txt">
            <div class="des">升级款95%白鹅绒秋冬加厚... </div>
            <div class="price">$889</div>
            <div class="fuli">三石福利价</div>

          </div>
        </a>
        <a href="##">
          <div class="list-pic">
            <img src="https://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" class="img">
          </div>
          <div class="list-txt">
            <div class="des">升级款95%白鹅绒秋冬加厚... </div>
            <div class="price">$889</div>
            <div class="fuli">三石福利价</div>

          </div>
        </a>

      </div>
    </div>

  </div>
</template>
<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .fivelist
    width 100%
    background white
    margin-top .2rem
    padding-bottom: .10667rem
    margin-bottom 3rem
    .listtop
      font-size: .42667rem
      height: 1.2rem
      line-height 1.2rem
      text-align center
      clearFix()
      .t-left
        float left
        margin-left .35rem
        font-size: .42667rem;
        font-family: PingFangSC-Regular
      .t-right
        float right
        margin-right .4rem
        font-size: .4rem;
        font-family: PingFangSC-Regular
        a
          color black
        .icon-right
          font-size .4rem
          color #333



    .listbottom
      width 100%
      background: #fff;
      .listbottom-big
        a
          width: 9.2rem;
          height: 3.73333rem
          display inline-block
          background: #FEF0DF;
          border-radius: .05333rem;
          margin: 0 .4rem .26667rem
          clearFix()
          .list-pic
            float left
            height: 3.73333rem
          .list-txt
            float right
            .title
              width 1.52rem
              font-size .32rem
              margin-top: .8rem;
              padding: 0 .10667rem;
              line-height: .37333rem;
              color: #B4282D;
              background: rgba(255,255,255,.9);
              border: 1px solid #B4282D;
              border-radius: .02667rem
            .name
              font-family: PingFangSC-Regular;
              font-size: .37333rem;
              color black
              width: 4.66667rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap
              margin-top .2rem
            .des
              font-size: .32rem;
              color: #7F7F7F;
              width: 4.66667rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top .2rem
            .price
              font-size: .37333rem;
              color: #b4282d
              margin-top .2rem




      .listbottom-small
        width 100%
        a
          display: block
          height: 4rem
          border-radius: .05333rem;
          margin-left: .26667rem
          float left
          .list-pic
            width 2.28rem
            height 2.28rem
            .img
              width 2.5rem
              height 2.5rem
          .list-txt
            margin-top .3rem
            font-size .32rem
            width 3rem
            .des
              color black
            .price
              color red
            .fuli
              border 1px solid red
              border-radius: .02667rem
              color red
              padding-left .1rem
              width 1.8rem






</style>

