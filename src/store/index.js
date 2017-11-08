import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // TODO: 初始状态
  count: 0,
  steps: [],
  loading: '',
  userName: ''
}

const getters = {
  count (state) {
    return state.count
  },
  steps (state) {
    return state.steps
  },
  loading (state) {
    return state.loading
  },
  userName (state) {
    return state.userName
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    increment (state, num) {
      state.count += num
      state.steps.unshift('加上' + num)
    },
    reduce (state, num) {
      state.count -= num
      state.steps.unshift('减去' + num)
    },
    loading (state, lstate) {
      state.loading = lstate
    },
    baseData (state, newState) {
      Object.assign(state, newState)
    }
  },
  actions: {
    setBase ({commit}, newState) {
      commit('baseData', newState)
    },
    increment ({commit}, num) {
      commit('increment', num)
    },
    reduce ({commit}, num) {
      commit('reduce', num)
    },
    loading ({commit}, lstate) {
      commit('loading', lstate)
    }
  },
  getters
})
