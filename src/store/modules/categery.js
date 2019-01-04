import {
  reqnavList,
} from '../../api'


import {
  RECEIVE_NAVLIST
} from '../mutation-types'


const state={
//状态
  navList:{}
}

const mutations ={
  //拿到数据
  [RECEIVE_NAVLIST](state,{navList}){
    state.navList=navList
  },
  
}

const actions ={
//处理异步信息的一些方法
  
  //第二页左边导航的异步数据
  async getnavList ({commit,state}){
    const result = await reqnavList()
    if (result.code === 0){
      const navList =result.data
      commit(RECEIVE_NAVLIST,{navList})
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




