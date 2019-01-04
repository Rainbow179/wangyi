<template>
  <div class="threelist">
    <!--上-->
    <div class="listtop">
      <div  class="t-left">
        品牌制造商直供
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
      <a href="##">
        <div class="goods-list">
          <div class="name">海外制造商</div>
          <div class="txt">
            <span>99元起</span>
            <i>上新</i>
          </div>
        </div>
      </a>
      <a href="##">
        <div class="goods-list">
          <div class="name">海外制造商</div>
          <div class="txt">
            <span>99元起</span>
          </div>
        </div>
      </a>
      <a href="##">
        <div class="goods-list">
          <div class="name">海外制造商</div>
          <div class="txt">
            <span>99元起</span>
            <i>上新</i>
          </div>
        </div>
      </a>
      <a href="##">
        <div class="goods-list">
          <div class="name">海外制造商</div>
          <div class="txt">
            <span>99元起</span>
            <i>上新</i>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .threelist
    width 100%
    background white
    margin-top .2rem
    padding-bottom: .10667rem
    .listtop
      font-size: .42667rem
      height: 1.2rem
      line-height 1.2rem
      text-align center
      position relative
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
      overflow: hidden;
      background: #fff;
      margin-bottom: .26667rem;
      padding: 0 .34667rem .34667rem .4rem;
      clearFix()
      a
        float left
        display inline-block
        width: 4.57333rem;
        height: 3.46667rem;
        overflow: hidden;
        background-image url("http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1")
        background-repeat no-repeat
        border-radius: .05333rem;
        border-bottom .1rem solid white
        border-right .1rem solid white
        .name
          font-size .42667rem
          color black
          text-align center
          margin-top .3rem
        .txt
          font-size .32rem
          text-align center
          margin-top .1rem
          span
            display inline-block
            color #7F7F7F
          i
            display inline-block
            width: .85333rem;
            height: .42667rem
            line-height: .42667rem;
            text-align: center
            color white
            background #CBB693
            border-radius: .05333rem





</style>

