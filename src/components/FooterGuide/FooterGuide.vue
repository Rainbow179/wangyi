<template>
 <footer class="footer-nav border-1px">
   <a href="##" class="guide-item" @click="goto('/msite')" :class="{on:isCurrent('/msite')}">
     <span>
       <i class="iconfont icon-shouye"></i>
     </span>
     <span>首页</span>
   </a>

   <a href="##" class="guide-item" @click="goto('/category')" :class="{on:isCurrent('/category')}">
     <span>
       <i class="iconfont icon-fenlei"></i>
     </span>
     <span>分类</span>
   </a>

   <a href="##" class="guide-item" @click="goto('/shiwu')" :class="{on:isCurrent('/shiwu')}">
     <span>
       <i class="iconfont icon-tupian"></i>
     </span>
     <span>识物</span>
   </a>

   <a href="##" class="guide-item" @click="goto('/cart')" :class="{on:isCurrent('/cart')}">
     <span>
       <i class="iconfont icon-gouwuche"></i>
     </span>
     <span>购物车</span>
   </a>

   <a href="##" class="guide-item" @click="goto('/profile')" :class="{on:isCurrent('/profile')}">
     <span>
       <i class="iconfont icon-wode2"></i>
     </span>
     <span>个人</span>
   </a>
 </footer>

</template>
<script>
  export default {
    methods:{
      //定义一个点击事件,跳转到相应的页面
      goto(path){
        this.$router.replace(path)
      },
      //定义一个方法来判断on应该在哪个导航上,判断这个方法上的path是否与实际depath相等
      isCurrent(path){
        return this.$route.path===path
      }

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.footer-nav
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  bottom 0
  left 0
  right 0
  background #fff
  width 100%
  height 1.30667rem
  display flex
  .guide-item
    display flex
    flex:1
    text-align center
    flex-direction column
    align-items center
    margin-top 5px
    color #666
    &.on
      color red
    span
      font-size 0.35rem
      margin-top 0.133rem
      .iconfont
        font-size 0.5rem


</style>

