import api from '@/api'

export default {
  fetchTags: async ({ commit }) => {
    let tagList = await api('getTags')
    tagList = tagList.map(tag => ({
      ...tag,
      isChecked: true
    }))
    commit('updateTags', tagList)
  },
  toggleTag: ({ commit }, payload) => {
    commit('updateIsChecked', payload)
  }
}
