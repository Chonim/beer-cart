export default {
  updateBeers: (state, payload) => {
    state.beerList = payload
  },
  updateCart: (state, payload) => {
    const { id, amount } = payload
    // add: stock--, inCart++
    // subtract: stock++, inCart--
    payload.stock -= amount
    payload.inCart += amount
    const matchedItemIndex = state.cartItems.findIndex(item => item.id === id)
    // push to cartItems if it's not in the array
    if (matchedItemIndex < 0) {
      state.cartItems.push(payload)
      return
    }
    // splice from the array if it's subtracted and its inCart is 0
    const matchedItem = state.cartItems[matchedItemIndex]
    if (amount < 0 && matchedItem.inCart === 0) {
      state.cartItems.splice(matchedItemIndex, 1)
    }
  },
  emptyCart: (state) => {
    state.cartItems = []
    state.beerList = state.beerList.map(item => ({
      ...item,
      // stock: item.stock + item.inCart, // reset stock to the initial amount
      inCart: 0
    }))
  }
}
