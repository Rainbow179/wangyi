<template>
  <div class="twolist">
    <div class="listtop">
      <i class="iconfont icon-yi icon-left"></i>
      <span>
          新人专享礼
        </span>
      <i class="iconfont icon-yi icon-right1"></i>
    </div>
    <div class="list-bottom">
      <a href="##" class="listItem">
        <!--左边-->
        <div class="listLeft">
          <div class="name">
            新人专享礼包
          </div>
          <div class="left">
            <div class="left-img">
              <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" class="img">
            </div>
            <div class="animation"></div>

          </div>
        </div>
        <!--右边-->
        <div class="listRight">
          <!--右上边-->
          <div class="s-top">
            <a href="##">
              <div class="item">
                <div class="name">福利社</div>
                <div class="txt">今日特价</div>
              </div>
              <div class="pic">
                <div class="s-img">
                  <img src="http://yanxuan.nosdn.127.net/52ee91bb64a19c645934ba85185560c4.png?imageView&thumbnail=200x200&quality=75" class="img">
                </div>
                <div class="pic-txt">
                  <div class="pic-txt-t">$666</div>
                  <div class="pic-txt-b">$888</div>
                </div>
              </div>
            </a>
          </div>
          <!--右下边-->
          <div class="s-bottom">
            <a href="##">
              <div class="item">
                <div class="name">新人拼团</div>
                <div class="txt">1人起包邮</div>
              </div>
              <div class="pic">
                <div class="s-img">
                  <img src="http://yanxuan.nosdn.127.net/52ee91bb64a19c645934ba85185560c4.png?imageView&thumbnail=200x200&quality=75" class="img">
                </div>
                <div class="pic-txt">
                  <div class="pic-txt-t">$666</div>
                  <div class="pic-txt-b">$888</div>
                </div>
              </div>
            </a>
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
  .twolist
    width 100%
    background white
    margin-top .2rem
    padding-bottom 1rem
    .listtop
      font-size: .42667rem
      height: 1.2rem
      line-height 1.2rem
      text-align center
      position relative
      .icon-left
        position absolute
        top:0
        left 3.4rem
        font-size .4rem
      .icon-right1
        font-size .4rem
        position absolute
        top:0
        right 3.4rem
    .list-bottom
      width 100%
      font-size: .42667rem
      .listItem
        clearFix()
        .listLeft
          position relative
          width: 4.57333rem;
          height: 5.78667rem;
          background: #F9E9CF;
          border-radius: .05333rem;
          margin-right: .05333rem;
          float: left;
          color: #333;
          margin-left:.4rem
          .name
            font-family: PingFangSC-Medium;
            font-size: .42667rem;
            padding: .4rem 0 0 .4rem;
          .left
            margin: .49333rem auto;
            width: 3.44rem;
            height: 3.42667rem
            .animation
              position: absolute;
              bottom 1.3rem
              right 1.4rem
              width: .4rem;
              height: .26667rem;
              background-image url(//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png)
              background-repeat no-repeat
              background-size: 100% 100%;
        .listRight
          width: 4.57333rem;
          height: 5.78667rem;
          border-radius: .05333rem;
          float: right;
          color: #333;
          margin-right .4rem
          padding-bottom .5rem
          .s-top
            color: #333;
            height: 2.93333rem;
            background #FBE2D3
            /*float: left;*/
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem
            a
              clearFix()
              .item
                float left
                .name
                  font-family: PingFangSC-Medium;
                  font-size: .42667rem
                  color #333
                  margin-bottom .15rem
                .txt
                  color #7F7F7F
              .pic
                position relative
                float right
                .img
                  position absolute
                  top -.1rem
                  right 0
                .pic-txt
                  position absolute
                  top:.4rem
                  right .4533rem
                  width: 1.06667rem;
                  height: 1.06667rem;
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  padding-top: .13333rem;
                  color: #fff;
                  text-align: center;
                  .pic-txt-b
                    font-size .25rem
                    margin-top .13rem
                    text-decoration line-through
          .s-bottom
            box-sizing border-box
            height 2.86667rem
            background:#F9E9CF
            padding: .26667rem 0 0 .4rem
            a
              clearFix()
              .item
                float left
                .name
                  font-family: PingFangSC-Medium;
                  font-size: .42667rem
                  color #333
                  margin-bottom .15rem
                .txt
                  color #7F7F7F
              .pic
                position relative
                float right
                .img
                  position absolute
                  top -.1rem
                  right 0
                .pic-txt
                  position absolute
                  top:.4rem
                  right .4533rem
                  width: 1.06667rem;
                  height: 1.06667rem;
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  padding-top: .13333rem;
                  color: #fff;
                  text-align: center;
                  .pic-txt-b
                    font-size .25rem
                    margin-top .13rem
                    text-decoration line-through


</style>

