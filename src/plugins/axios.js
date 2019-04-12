import tagList from '@/assets/data/tags'
import beerList from '@/assets/data/beers'

const getMock = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(data), 200)
  })
}

const failMock = () => {
  const errorObj = {
    title: 'Internal Server Error',
    msg: 'Sorry, something went wrong'
  }
  return new Promise((resolve, reject) => {
    setTimeout(reject(errorObj), 200)
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
  }
}

export default axios
