// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes. 
export const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  addTodo (state) {
    state.list.push($store.state.todoText)
  }
}