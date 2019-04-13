import {
  tagList,
  beerList
} from '@/utils/__tests__/__mocks__/tag-mocks'

describe('tagFilter', () => {
  const checkedTags = tagList
    .filter(tag => tag.isChecked)
    .map(tag => tag.key)
  it('should get filtered tag ids correctly', () => {
    expect(checkedTags).toEqual([0, 3, 5])
  })

  it('should filter items by tags correctly', () => {
    checkedTags.forEach((tagKey, tagIndex) => {
      beerList.forEach((beer) => {
        if (tagIndex === 0) {
          beer.matchedTags = 0
        }
        if (beer.tags.some(beerTag => beerTag.key === tagKey)) {
          beer.matchedTags += 1
        }
      })
    })
    const sortedBeerList = beerList.sort((a, b) => b.matchedTags - a.matchedTags)
    expect(sortedBeerList[0].name).toBe('OB Premier')
  })
})
