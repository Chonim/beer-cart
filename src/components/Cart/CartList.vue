<template>
  <div class="cart-list-wrapper">
    <beer-card-list :card-list="getCartItems" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BeerCardList from '@/components/Common/CardList'

export default {
  name: 'CartList',
  components: {
    BeerCardList
  },
  computed: {
    ...mapGetters('beer', ['getCartItems'])
  }
}
</script>

<style lang="scss" scoped>
.cart-list-wrapper {
  margin-top: 16px;
}
</style>
