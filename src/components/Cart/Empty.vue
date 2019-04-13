<template>
  <div class="empty-cart-wrapper">
    <img
      class="empty-cart"
      src="/static/icons/empty-cart.svg"
      alt="Empty Cart"
    >
    <h1>카트가 비었습니다</h1>
    <p>목록에서 원하는 맥주를 카트에 담아보세요</p>
    <beer-button
      buttonText="목록으로 가기"
      :buttonStyle="goToListButtonStyle"
      @click="$router.push({ name: 'BeerList' })"
    />
  </div>
</template>

<script>
import BeerButton from '@/components/Common/Button'

export default {
  name: 'CartEmpty',
  components: {
    BeerButton
  },
  computed: {
    goToListButtonStyle () {
      return {
        marginTop: '16px',
        width: '50%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-cart-wrapper {
  margin-top: 20%;
  overflow: hidden;
  .empty-cart {
    height: 56px;
    width: auto;
  }
  h1 {
    color: #6E6E78;
    font-size: 20px;
  }
  p {
    color: #95959E;
    font-size: 14px;
    max-width: 132px;
    margin: 0 auto;
  }
}
</style>
