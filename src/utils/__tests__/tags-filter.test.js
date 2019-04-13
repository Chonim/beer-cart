import {
  getCheckedTags,
  sortByFilters
} from '@/utils/tags-filter'
import {
  tagList,
  beerList
} from '@/utils/__tests__/__mocks__/tag-mocks'

describe('tagFilter', () => {
  const checkedTags = getCheckedTags(tagList)
  it('should get filtered tag ids correctly', () => {
    expect(checkedTags).toEqual([0, 3, 5])
  })

  it('should filter items by tags correctly', () => {
    const sortedBeerList = sortByFilters(checkedTags, beerList)
    expect(sortedBeerList[0].name).toBe('OB Premier')
  })
})
