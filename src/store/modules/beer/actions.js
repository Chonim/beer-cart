import api from '@/api'

export default {
  fetchBeers: async ({ commit }) => {
    const beerList = await api('getBeers')
    commit('updateBeers', beerList)
  }
}
