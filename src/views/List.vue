<template>
  <div>
    <tag-list />
    <beer-list />
  </div>
</template>

<script>
import TagList from '@/components/List/TagList'
import BeerList from '@/components/List/BeerList'

export default {
  name: 'BeerListView',
  components: {
    TagList,
    BeerList
  }
}
</script>

<style lang="scss" scoped>

</style>
