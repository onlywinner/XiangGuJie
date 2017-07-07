// actions are functions that causes side effects and can involve
// asynchronous operations.
export const actions = {
  savedata:({commit}).{data}=>{
    state.list.push("abc");
  },
  addTodo: ({ commit }) => commit('addTodo'),
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}