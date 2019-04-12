import tagList from '@/assets/data/tags'
import beerList from '@/assets/data/beers'

const delay = time => new Promise(resolve => setTimeout(resolve, time))

const getMock = async (data) => {
  await delay(500)
  return new Promise(resolve => resolve(data))
}

const postMock = async (payload) => {
  let totalCount = 0
  let totalPrice = 0
  payload.forEach(({ id, count }) => {
    const { price } = beerList.find(beer => beer.id === id)
    totalCount += count
    totalPrice += price * count
  })
  const response = {
    totalCount,
    totalPrice
  }
  await delay(1000)
  return new Promise(resolve => resolve(response))
}

const failMock = () => {
  const errorObj = {
    title: 'Internal Server Error',
    msg: 'Sorry, something went wrong'
  }
  return new Promise((resolve, reject) => {
    setTimeout(reject(errorObj), delay)
  })
}

const axios = {
  get (endPoint) {
    // const failChance = 0.5
    const failChance = 0
    const randomNumber = Math.random()
    if (randomNumber <= failChance) {
      return failMock()
    }
    switch (endPoint) {
      case '/api/tags':
        return getMock(tagList)
      case '/api/beers':
        return getMock(beerList)
      default:
        break
    }
  },
  post (endpoint, payload) {
    switch (endpoint) {
      case '/api/purchase':
        return postMock(payload)
      default:
        break
    }
  }
}

export default axios
