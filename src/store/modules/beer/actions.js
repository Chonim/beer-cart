import api from '@/api'

export default {
  fetchBeers: async ({ commit }) => {
    let beerList = await api('getBeers')
    beerList = beerList.map((beer) => ({
      ...beer,
      inCart: 0
    }))
    commit('updateBeers', beerList)
  },
  addToCart: ({ commit }, payload) => {
    payload.amount = 1
    commit('updateCart', payload)
  },
  substractFromCart: ({ commit }, payload) => {
    payload.amount = -1
    commit('updateCart', payload)
  },
  emptyCart: ({ commit }) => {
    commit('emptyCart')
  }
}
