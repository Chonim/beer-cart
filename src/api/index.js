import Beer from './beer'
import Purchase from './purchase'

const api = (method, ...args) => {
  const path = {
    ...Beer,
    ...Purchase
  }
  return path[method](...args)
}

export default api
