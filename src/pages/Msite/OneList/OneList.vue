<template>
  <div class="onelist">
    <ul class="list">
      <li class="listItem" v-for="(name,index) in cateList" :key="index">
        <a href="##">
          <div class="imgItem">
            <img :src="name.picUrl" class="img">
          </div>
          <div class="txt">
            <span>{{name.text}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>

  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        cateList:state=>state.msite.cateList
      })
    }



  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .onelist
    background white
    width: 100%;
    height: 5.22667rem
    clearFix()
    .list
      clearFix()
      /*float left*/
      .listItem
        width: 1.46667rem
        height: 2.08rem
        float: left
        margin: .13333rem .26667rem
        a
          .imgItem
            width: 1.46667rem
            height: 1.46667rem
            line-height 1.46667rem
            border:1px solid white
            border-radius .4rem
            overflow hidden
            text-align center
            vertical-align middle
            .img
              width: 1.46667rem
              height: 1.46667rem
          .txt
            font-size .32rem
            color #333
            text-align center
            margin-top .12rem




</style>

