import Axios from '@/plugins/axios'

export default {
  makePurchase (payload) {
    return Axios.post('/api/purchase', payload)
  }
}
