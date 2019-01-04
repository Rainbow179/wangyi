//引入
import {reqkingKongList} from '../../api'
import {reqcateList} from '../../api'
import {reqfocusList} from '../../api'


import {
  RECEIVE_KINGKONGLIST,
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
} from '../mutation-types'






const state={
//状态
  kingKongList:[],
  cateList:[],
  focusList:[],
}

const mutations ={
  //拿到数据
  [RECEIVE_KINGKONGLIST](state,{kingKongList}){
    state.kingKongList=kingKongList
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList=cateList
  },
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },

}

const actions ={
//处理异步信息的一些方法
  //获取异步goodstap信息
  async getkingKongList({commit,state}){
    // 1.发送ajax请求
    const result =await reqkingKongList()
    //2.有了结果后,提交mutation
    if(result.code===0){
      const kingKongList =result.data
      commit(RECEIVE_KINGKONGLIST,{kingKongList})
    }
  },
  
  //异步获取列表1 的数据
  async getcateList({commit,state}){
    const result = await reqcateList()
    if(result.code===0){
      const cateList =result.data
      commit(RECEIVE_CATELIST,{cateList})
    }
  },
  
  //轮播图的异步数据
  async getfocusList({commit,state}){
    const result = await reqfocusList()
    if(result.code===0){
      const focusList =result.data
      commit(RECEIVE_FOCUSLIST,{focusList})
    }
  },

}

const getters ={

}


export default {
  //暴露
  state,
  mutations,
  actions,
  getters
}







