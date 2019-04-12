import Vue from 'vue'
import Vuex from 'vuex'

import beer from './modules/beer'
import tag from './modules/tag'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    beer,
    tag
  }
})
