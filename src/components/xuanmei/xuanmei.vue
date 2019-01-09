<template>
  <div class="shiwu-main" style="width: 100%; height: 100%; overflow: scroll;">
    <div class="xm-main" v-for="(feHelper,index) in feHelper" :key="index">
      <a href="##" v-for="(topic,index) in feHelper.topics" :key="index">
        <div class="top">
          <span class="img">
            <img :src="topic.avatar" alt="">
          </span>

          <span>{{topic.nickname}}</span>
        </div>
        <div class="txt">{{topic.title}}</div>
        <div class="pic">
          <img :src="topic.picUrl" alt="">
        </div>
        <div class="kan">
          <i class="iconfont icon-sousuo"></i>
          <span>{{topic.readCount}}人看过</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import{mapState} from 'vuex'

  export default {


    data(){
      return{

      }

    },
    computed:{
      ...mapState({
        feHelper:state=>state.shiwu.feHelper
      })

    },
    methods:{

    },

    mounted(){
      this.$store.dispatch('getFeHelper')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shiwu-main
    position fixed
    margin-top 2.17333rem
    .xm-main
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .5rem .5rem
      margin-bottom .2rem
      a
        width 100%
        .top
          font-size: .28rem;
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .img
            display inline-block
            width: .56rem;
            height: .56rem;
            overflow: hidden;
            border-radius: 50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: .01rem solid #d9d9d9;
            margin-right: .12rem
            vertical-align: middle
            img
              width:100%;
              height:100%;
              border-radius: 50%;

          span
            font-size .32rem
            color black
        .txt
          font-size .48rem
          color black
          margin-top .2rem
        .pic
          width: 9rem;
          height: 5rem;
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
          background: #f0f0f0
          margin-top .2rem
          img
            display block
            width: 100%;
            height: 100%;
        .kan
          margin-bottom .2rem
          span
            font-size .32rem






</style>

