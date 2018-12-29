/*
 包含应用中所有路由配置的模块
 */
//引入所有路由组件

import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'



export default [
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shiwu',
    component:Shiwu
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    component: Msite,
  },
]
