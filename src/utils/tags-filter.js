export const getCheckedTags = (tagList) => {
  return tagList
    .filter(tag => tag.isChecked)
    .map(tag => tag.key)
}

export const sortByFilters = (checkedTagKeys, beerList) => {
  checkedTagKeys.forEach((tagKey, tagIndex) => {
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
  return sortedBeerList
}
