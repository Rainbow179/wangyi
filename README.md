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
*写msite头部,



