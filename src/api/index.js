import Beer from './beer'

const api = (method, ...args) => {
  const path = {
    ...Beer
  }
  return path[method](...args)
}

export default api
