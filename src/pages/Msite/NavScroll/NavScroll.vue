<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="(text,index) in kingKongList" :key="index" :class="{'active':current === index}" @click="currentIndex(index)">
        <span>{{text}}</span>
      </li>
    </ul>
    <div class="toggle">
      <div class="iconfont icon-shang qiehuan">
      </div>
    </div>
  </div>
</template>
<script>
  import BScorll from 'better-scroll'

  export default {
    data () {
      return {
        kingKongList: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        new BScorll ('.wrapper' ,{
          scrollX: true,
          click: true
        })
      })
    },

    methods:{
      currentIndex (index) {
        this.current = index
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .wrapper
    width 100%
    height .853rem
    line-height .853rem
    text-align center
    overflow hidden
    .content
      width 200%
      height 100%
      clearFix()
      li
        float left
        font-size .37333rem
        margin 0 .4rem
        &.active
          color red
          border-bottom 3px solid red
    .toggle
      position absolute
      top 1.2rem
      right: -.1rem
      width 2rem
      height .8rem
      text-align center
      .qiehuan
        background white
        font-size .48rem



</style>

