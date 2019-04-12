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
  },
  emptyCart: (state) => {
    state.cartItems = []
    state.beerList = state.beerList.map(item => ({
      ...item,
      stock: item.stock + item.inCart,
      inCart: 0
    }))
  }
}
