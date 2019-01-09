<<template>
  <div>
    <!-- 短信验证码登录 -->
    <LoginTemplate :loginInfo="loginInfo">
      <div class="getCode" slot="getCode">获取验证码</div>
      <div class="register" slot="register">注册账号></div>
    </LoginTemplate>
  </div>
</template>

<script>

  import LoginTemplate from '../../components/LoginTemplate/LoginTemplate.vue'
  export default {
    name: "PhoneLogin",
    components:{
      LoginTemplate
    },
    data () {
      return {
        loginInfo: {
          type: '',
          MsgType: '请输入手机号',
          pswMsg: '请输入短信验证码',
          leftInfo: '遇到问题?',
          phone:'',//手机号
          code:'',//验证码
        },
      }
    },
    computed:{
      //正则判断手机号的合法性
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      },
    },

    methods:{
      //请求登陆
      login(){
        //进行表单验证
        const {phone,code}=this
        if(!this.isRightPhone){
          return MessageBox.alert('请输入正确的手机号')
        }else if (!/^\d{6}$/.test(code)){
          return MessageBox.alert('请输入正确的手机验证码')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .getCode
    position absolute
    right 0
    top .5rem
    font-size .36rem
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    background: #fff;
    line-height: 0.75rem;
    border: 1px solid #333;
    border-radius: 10px;

  .register
    font-size: .37333rem;
    line-height: .53333rem;
    color: #333;
</style>
