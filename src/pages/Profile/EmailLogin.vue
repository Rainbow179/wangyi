<template>
  <LoginTemplate :loginInfo="loginInfo"></LoginTemplate>
</template>
<script>
  import LoginTemplate from '../../components/LoginTemplate/LoginTemplate.vue'
  export default {
    name: "EmailLogin",
    components:{
      LoginTemplate
    },

    data(){
      return {
        loginInfo:{
          type:'email',
          MsgType:'请输入邮箱账号',
          pswMsg: '请输入短信验证码',
          leftInfo: '注册账号',
          rightInfo: '忘记密码',
          email:'',//邮箱号
          psw:'',//密码
        }
      }
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

