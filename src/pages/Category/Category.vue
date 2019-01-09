<template>
  <div class="wrap">
    <div class="wrap-main">
      <!--头部-->
      <div class="header">
        <div class="header-main" @click="goto('/search')">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品,共20898款好物</span>
        </div>
      </div>
      <!--左边导航-->
      <div class="navLeft wrapper">
        <ul class="navList1 content">
          <li class="navItem" @click="current=index" :class="{on:current===index}" v-for="(list,index) in navList" :key="index">
            <a href="##" class="navtxt">{{list.name}}</a>
          </li>
        </ul>
      </div>
      <!--右边内容-->
      <div class="listDetail" v-if="selectedOpation">
          <div class="banner">
            <img />
          </div>
          <div class="detail">
            <ul class="list" >
              <li class="item"  v-for="(list,index) in selectedOpation.subCateList" :key="index">
                <a href="javascript:;">
                  <div class="pic">
                    <img :src="list.bannerUrl">
                  </div>
                  <div class="txt">
                    <i>{{list.name}}</i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        current: 0
      }
    },


    methods:{
      goto(path){
        this.$router.replace(path)
      },
    },

    computed:{
      ...mapState({
        navList:state=>state.categery.navList
      }),

      selectedOpation(){
        const {current} = this
        return this.navList.find((item,index)=>index===current)
      }
    },

    mounted(){
      new BScroll('.wrapper')
      this.$store.dispatch('getnavList')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    width 100%
    height 100%
    background white
    .wrap-main
      width 100%
      height 100%
      clearFix()
      //头部样式
      .header
        border-bottom 1px solid #eee
        position fixed
        z-index 100
        width 100%
        height: 1.17333rem
        background white
        .header-main
          width 90%
          height .74667rem
          line-height .74667rem
          font-size .3899rem
          color #666
          border 1px solid white
          border-radius .10667rem
          background-color #ededed
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          margin auto
          text-align center
          .icon-sousuo
            font-size .54rem
            color #666



      .navLeft
        height 10rem
        position fixed
        z-index 50
        float left
        width 2.16rem
        background white
        border-right 1px solid #eee
        .navList1
          height 110%
          padding-top 1.17333rem
          padding-bottom 1.30667rem
          .navItem
            width: 100%;
            height: .66667rem;
            text-align: center;
            border: none
            margin .5rem 0
            &.on
              color red
              border-left:.1rem solid red
            .navtxt
              display block
              font-size .38rem
              height: .66667rem;
              line-height .66667rem
              text-align: center
      .listDetail
        background white
        margin-left: 2.16rem;
        padding: 1.6rem .4rem 1.6rem
        .banner
          width: 100%;
          height: 2.56rem;
          display: table;
          margin-bottom: .42667rem;
          background: center no-repeat #f4f4f4;
          background-size: cover;
          border-radius: 4px
        .detail
          width 100%
          .list
            .item
              width 1.92rem
              display inline-block
              margin-right .4rem
              .txt
                font-size .32rem
                height: .96rem
                color #333
                text-align center
                overflow hidden
              .pic
                width 1.92rem
                height 1.92rem
                overflow hidden
                img
                  width 100%
                  height 100%


</style>

