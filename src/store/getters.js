// getters are functions
export const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}