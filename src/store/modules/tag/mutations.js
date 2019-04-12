export default {
  updateTags: (state, payload) => {
    state.tagList = payload
  },
  updateIsChecked: (state, payload) => {
    const { key, isChecked } = payload
    const matchedTag = state.tagList.find(tag => tag.key === key)
    matchedTag.isChecked = !isChecked
  }
}
