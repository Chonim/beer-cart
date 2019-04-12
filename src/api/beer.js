import Axios from '@/plugins/axios'

const endpoints = '/api'

export default {
  getTags () {
    return Axios.get(`${endpoints}/tags`)
  },
  getBeers () {
    return Axios.get(`${endpoints}/beers`)
  }
}
