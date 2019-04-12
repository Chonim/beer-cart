<template>
  <div>
    <cart-list v-if="$store.getters['beer/getCartLength']" />
    <cart-empty v-else/>
  </div>
</template>

<script>
import CartList from '@/components/Cart/CartList'
import CartEmpty from '@/components/Cart/Empty'

export default {
  name: 'BeerCartView',
  components: {
    CartList,
    CartEmpty
  },
  data () {
    return {
      cartItems: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
