<template>
  <div class="cart-list-wrapper">
    <beer-card-list :card-list="getCartItems" />
    <div class="cart-item-total">
      <div class="total-amount">총 구매수량 {{ totalAmount }} 개</div>
      <div class="total-price">총 결제금액 {{ totalPrice.toLocaleString() }} 원</div>
    </div>
    <beer-button
      button-text="구매하기"
      :button-style="purchaseButtonStyle"
      @click="makePurchase()"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
import { getTotalAmount, getTotalPrice } from '@/utils/total-calculator'
import BeerCardList from '@/components/Common/CardList'
import BeerButton from '@/components/Common/Button'

export default {
  name: 'CartList',
  components: {
    BeerCardList,
    BeerButton
  },
  computed: {
    ...mapGetters('beer', ['getCartItems']),
    totalAmount () {
      return getTotalAmount(this.getCartItems)
    },
    totalPrice () {
      return getTotalPrice(this.getCartItems)
    },
    purchaseButtonStyle () {
      return {
        fontSize: '20px',
        marginTop: '16px',
        width: 'calc(100% - 50px)',
        height: '50px'
      }
    }
  },
  methods: {
    async makePurchase () {
      const payload = this.getCartItems.map((item) => ({
        id: item.id,
        count: item.inCart
      }))
      console.log('Items in cart: ')
      console.table(this.getCartItems)
      console.log('Payload: ')
      console.table(payload)
      const result = await api('makePurchase', payload)
      console.log('Response from server: ')
      console.table(result)
      this.$store.dispatch('beer/emptyCart')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-list-wrapper {
  margin-top: 16px;
  .cart-item-total {
    font-size: 24px;
    font-weight: 400;
    text-align: right;
    margin-top: 24px;
    margin-right: 16px;
  }
}
</style>
