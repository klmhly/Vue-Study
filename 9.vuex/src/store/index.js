import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  flag: 1,
  todo:[
    {id:1, text:'is', done:true},
    {id:2, text:'on', done:false},
    {id:3, text:'hello', done:true}
  ]
}

const getters = {
  isCount: state => {
    return state.count
  },

  isFlag: state => {
    return state.flag
  },

  isTodo: state => {
    return state.todo
  }
}

const mutations = {
  ADD: (state,n) => {
    return state.count += n
  }
}
const actions = {
  ADD (context,n) {
    context.commit('ADD',n)
  }
}


//
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
