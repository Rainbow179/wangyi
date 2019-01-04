/*
 包含应用中所有路由配置的模块
 */
//引入所有路由组件

import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'



export default [
  {
    path:'/msite',
    component:Msite,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/category',
    component:Category,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/shiwu',
    component:Shiwu,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect: '/msite'
  },
]
