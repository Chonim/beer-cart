<template>
  <div class="">
    <div v-if="cartItems.length">Cart Itemsss!!</div>
    <cart-empty v-else/>
  </div>
</template>

<script>
import CartEmpty from '@/components/Cart/Empty'

export default {
  name: 'BeerCart',
  components: {
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
