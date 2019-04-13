import store from '@/store'
import {
  sortByFilters
} from '@/utils/tags-filter'

export default {
  getBeerList: state => {
    if (store.getters['tag/isAllTagsChecked']) {
      return state.beerList
    }
    const checkedTags = store.getters['tag/getCheckedTags']
    return sortByFilters(checkedTags, state.beerList)
  },
  getCartItems: state => state.cartItems,
  getCartLength: state => state.cartItems.length
}
