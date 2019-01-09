import ajax from './ajax'


const BASE='/api' //开发环境下代理帮我们转发信息  '/api'代表代理路径
//获取实物列表
export const reqkingKongList = () => ajax('/kingKongList');
//获取商品列表
export const reqcateList = ()=>ajax('/cateList')
//轮播图
export const reqfocusList=()=>ajax('/focusList')
//第二页左边导航
export const reqnavList=()=>ajax('/navList')
//第三页实物tab
export const reqnavTab=()=>ajax('/navTab')
export const reqfeHelper=()=>ajax('/feHelper')







