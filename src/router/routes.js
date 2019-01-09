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
import PhoneLogin from '../pages/Profile/PhoneLogin.vue'
import EmailLogin from '../pages/Profile/EmailLogin.vue'
import Register from '../pages/Profile/Register.vue'





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
    //二级路由
    children:[
      {
        name: 'PhoneLogin',
        path: '/profile/phone',
        component: PhoneLogin,
      },
      {
        name: 'EmailLogin',
        path: '/profile/email',
        component: EmailLogin,
      },
      {
        name: 'Register',
        path: '/profile/register',
        component: Register,
      },
      
    ]
  },
  {
    path:'/search',
    component:Search
  },
  
  {
    path:'/',
    redirect: '/msite'
  },
]
