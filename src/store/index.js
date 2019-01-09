
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import categery from './modules/categery'
import shiwu from './modules/shiwu'


Vue.use(Vuex)

export default new Vuex.Store({ // options
  modules: {
    msite,
    categery,
    shiwu
  },
  actions,
  getters,
})
