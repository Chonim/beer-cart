import {
  getTotalAmount,
  getTotalPrice
} from '@/utils/total-calculator'
import {
  cartMock1
} from '@/utils/__tests__/__mocks__/cart-mocks'

describe('getTotal', () => {
  it('has to calculate correct total amount', () => {
    expect(getTotalAmount(cartMock1)).toBe(6)
  })

  it('has to calculate correct total price', () => {
    expect(getTotalPrice(cartMock1)).toBe(29000)
  })
})
