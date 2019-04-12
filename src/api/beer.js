import tagList from '@/assets/data/tags'

export default {
  getTags () {
    // GET /api/tags mock
    return new Promise((resolve, reject) => {
      setTimeout(resolve(tagList), 200)
    })
  }
}
