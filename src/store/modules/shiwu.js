
import {
  reqnavTab,
  reqfeHelper,
} from '../../api'


import {
  RECEIVE_NAVTAB,
  RECEIVE_FEHELPER
} from '../mutation-types'

const state={
//状态
  navTab:[],
  feHelper:[],
}

const mutations ={
  //拿到数据
  [RECEIVE_NAVTAB](state,{navTab}){
    state.navTab=navTab
  },
  [RECEIVE_FEHELPER](state,{feHelper}){
    state.feHelper=feHelper
  },
  
}

const actions ={
//处理异步信息的一些方法
  
  //第三页导航的数据
  async getNavTab ({commit,state}){
    const result = await reqnavTab()
    if (result.code === 0){
      const navTab =result.data
      commit(RECEIVE_NAVTAB,{navTab})
    }
  },
  async getFeHelper ({commit,state}){
    const result = await reqfeHelper()
    if (result.code === 0){
      const feHelper =result.data
      commit(RECEIVE_FEHELPER,{feHelper})
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
