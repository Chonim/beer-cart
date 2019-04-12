const getTotal = (items) => {
  return items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
}

export const getTotalAmount = (items) => {
  const amountArr = items.map(item => item.inCart)
  return getTotal(amountArr)
}

export const getTotalPrice = (items) => {
  const subTotalArr = items.map(({
    price,
    inCart
  }) => price * inCart)
  return getTotal(subTotalArr)
}
