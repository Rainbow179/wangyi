
import Mock from 'mockjs'
import cateList from './cateList.json'
import feilei_list from './feilei_list.json'
import shouye_data from './shouye_data.json'
import fenlei_zhuanq from './fenlei_zhuanqu.json'


// 首页tab列表
Mock.mock('/kingKongList',{code:0,data:cateList})
//首页商品列表
Mock.mock('/cateList',{code:0,data:shouye_data.kingKongModule.kingKongList})
//轮播图
Mock.mock('/focusList',{code:0,data:shouye_data.focusList})
//第二页左边内容
Mock.mock('/navList',{code:0,data:fenlei_zhuanq.navList})












