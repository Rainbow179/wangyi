## 开发中如何使用GIT

* 本地有仓库，远程没有仓库
  * 远程创建仓库
  * 本地进行版本控制
    * git init
    * git add .
    * git commit -m 'xxx'
  * 将本地仓库和远程仓库关联起来
    * git remote add origin xxx
* 本地没有仓库，远程有仓库
  * 获取远程仓库地址，克隆到本地来
    * git clone xxx
  * 假设远程只有master分支，新建dev分支开发
    * git checkout -b dev 新建并切换到指定分支，将当前分支的内容复制到dev上
  * dev分支开发完了(常用)
    * 本地仓库管理
      * git add .
      * git commit -m 'xxx'
    * 提交远程仓库去
      * git push origin dev
    * 切换分支
      * git checkout master
* 需要合并分支内容
  * git checkout master
  * git merge dev
  * git push origin master
* 本地没有仓库，远程有仓库, 并且远程有dev分支内容
  * 将远程仓库克隆到本地来
    * git clone xxx
  * 问题：只有一个分支。想要其它分支的内容
    * git fetch origin dev:dev
  * 比较主分支
    * git diff dev master
==============================================================================================================
## Vue版本网易严选

* pages是路由组件的文件夹
* router是路由文件的配置文件(所有的路由组件都要在这里声明)
* components是普通组件的文件夹
* store是vuex的文件

=======================================================================================================
* 下载vue脚手架
    npm i -g vue-cli
    vue init webpack name
    cd name
	  npm install
	  npm run dev
* 下载stylus编译器
    npm install stylus stylus-loader --save-dev
* 忽略eslint检查功能
    .eslintignore 中写入 *.vue  *.js
* 实现vue组件化
  1. index.html中的准备工作
  2.创建各组件文件夹
* 下载vue-router
    npm install vue-router --save
    配置路由组件内容
    router中的index和routes文件
* 移动端适配问题的解决
* 先写FooterGuide组件,让底部导航全都显示出来
  1. 点击哪个导航就跳转到哪个页面,给一个点击事件,定义一个方法,用声明式路由跳转
  2. 跳转到哪个页面,哪个导航拥有on类名,需要定义一个方法判断是都已经跳转到该导航页面,跳转了才能有on类


***

设置api

* 跨域问题:
    在config => index.js中设置代理信息
          proxyTable: {
                '/api': { // 匹配所有以 '/api'开头的请求路径
                  target: 'http://localhost:5000', // 代理目标的基础路径
                  changeOrigin: true, // 支持跨域
                  pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
                    '^/api': ''
                  }
                }
          },

*设置mock
 下载  npm i mock --save

    import Mock from 'mockjs'
    import data from './data.json'  // 已自动解析js对应的类型: 对象

    // goods的接口
    Mock.mock('/goods', {code: 0, data: data.goods})
    // ratings的接口
    Mock.mock('/ratings', {code: 0, data: data.ratings})
    // info的接口
    Mock.mock('/info', {code: 0, data: data.info})

    console.log('mockServer....')

    // export  不需要向外暴露任何东西



    *先设置mockSever=>api.index中设置=>mutation-types中定义=>store中的modules中引入api和mutation-types中定义的东西
    =>store中的modules中的state中定义状态=>store中的modules中的mutation中拿到数据=>store中的modules中的action中定义异步获取数据的方法
    =>到相应的组件中传递数据以及从state中拿到数据(dispath和mapState)


    **拆分一个新的组件



    <!--关于第二行跳转：左右两边列表必须用同一个数据首先绑定一个点击事件@click="handleClick在methods:
    里面定义这个点击事件然后在data里面存一个下标，下标可以自定义
     {pageCount: 0初始位置为0，然后把下标传进绑定监听里面@click="handleClick(index,，在定义绑定监听里传进去handleClick(index）
     { this.pageCount = index然后完了以后点击左侧列表右侧列表
     跟着滑动到相应位置in categoryL1List[pageCount].subCateList因为subCateList数据在ategoryL1List里所以用用下标找-->


****
  点击哪个给哪个添加一个样式:active的添加:
  <a href="##" @click="change(1)" :class="current===1? 'on' : ''">发现</a>
  <a href="##" @click="change(2)" :class="current===2? 'on' : ''">甄选家</a>

  给current 设置初始状态为1(data中)
  methods中定义一个方法来判断change的值
        change:function(a){  //传入参数这里指1、2
          this.current=a;   //current==1 or current==2
        }

 ****
 关于api发送ajax接口的说明(api中index):
  1.export const reqnavList=()=>ajax('/navList')
    1.箭头函数中()传入要带的参数,ajax()中有三个参数,地址,带的参数信息,请求方式
     export const reqnavList=(user)=>ajax('/navList',{name,pwd,captcha},'POST')
     user中必须含有name,pwd.captcha三个参数,或者user直接写成({name,pwd,captcha}),ajax第二个参数必须时对象
     箭头函数中的()中写对象是一个对象参数,需要对应着写,不写对象,写几个参数就是几个参数



  ****
    个人页面
       用二级路由
       定义手机登陆和邮箱登陆以及注册的二级路由,页面显示上大致是一样的样式,可以用相同的class名来写,
       个人页面的一些东西可以按照路由地址来判断 v-if='$route.path====profile'  相等就显示,不相等就不显示
       登陆页面能复用的地方做一个组件,方便复用

       前台表单验证:
         正则必须要会!









