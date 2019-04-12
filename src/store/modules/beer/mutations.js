export default {
  updateBeers: (state, payload) => {
    state.beerList = payload
  },
  updateCart: (state, payload) => {
    const { id, amount } = payload
    payload.stock -= amount
    payload.inCart += amount
    const matchedItem = state.cartItems.find(item => item.id === id)
    if (!matchedItem) {
      state.cartItems.push(payload)
    }
    if (matchedItem && !matchedItem.inCart) {
      state.cartItems.splice(matchedItem, 1)
    }
  }
}
