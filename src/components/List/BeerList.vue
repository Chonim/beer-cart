<template>
  <div class="beer-list-wrapper">
    <beer-card-list :card-list="getBeerList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BeerCardList from '@/components/Common/CardList'

export default {
  name: 'BeerList',
  components: {
    BeerCardList
  },
  computed: {
    ...mapGetters('beer', ['getBeerList'])
  }
}
</script>

<style lang="scss" scoped>

</style>
