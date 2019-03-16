const common = {
  namespaced: true,
  state: {
    name: 'yuyu',
    age: 18,
    number: 123456
  },
  mutations: {
    setName (state, val) {
      state.name = val
    },
    setAge (state, val) {
      state.age = val
    },
    setNumber (state, val) {
      state.number = val
    }
  },
  actions: {
    changeName ({ commit, state }, val) {
      commit('setName', val)
    },
    changeAge ({ commit, state }, val) {
      commit('setAge', val)
    },
    changeNumber ({ commit, state }, val) {
      commit('setNumber', val)
    }
  },
  getters: {

  }
}
export default common
