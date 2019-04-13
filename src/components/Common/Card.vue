<template>
  <div class="box-shadow beer-card-wrapper">
    <img
      class="beer-thumbnail"
      :src="`/static/img/${item.image}`"
      :alt="item.name"
    >
    <div class="beer-detail">
      <div class="beer-name">{{ item.name }}</div>
      <div class="beer-tags">{{ item.tags.map(tag => tag.name).join(', ') }}</div>
      <div class="beer-price-wrapper">
        <div class="beer-price">{{ item.price.toLocaleString() }}</div>
        <div class="price-unit">원</div>
      </div>
      <div class="beer-stock">{{ getStockDetail(item) }}</div>
    </div>
    <div class="button-wrapper">
      <beer-button
        v-if="item.inCart"
        :button-text="removeButtonName"
        :button-style="subtractFromCartButtonStyle"
        @click="subtractFromCart(item)"
      />
      <beer-button
        v-if="$route.name === 'BeerList'"
        button-text="담기"
        :button-style="addToCartButtonStyle"
        :is-disabled="!item.stock"
        @click="addToCart(item)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BeerButton from '@/components/Common/Button'

export default {
  name: 'BeerCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    BeerButton
  },
  computed: {
    subtractFromCartButtonStyle () {
      return {
        minWidth: '20px',
        color: '#3A4961',
        backgroundColor: '#eee',
        border: '1px solid #eee'
      }
    },
    addToCartButtonStyle () {
      return {
        minWidth: '20px',
        marginLeft: '8px'
      }
    },
    removeButtonName () {
      return this.$route.name === 'BeerList' ? '빼기' : '취소'
    }
  },
  methods: {
    ...mapActions('beer', [
      'addToCart',
      'subtractFromCart'
    ]),
    getStockDetail ({ stock, inCart }) {
      let stockDetail = inCart > 0 ? `수량 ${inCart}` : ''
      if (this.$route.name === 'BeerList') {
        stockDetail = `재고 ${stock} ${stockDetail}`
      }
      if (!stock && !inCart) {
        stockDetail = '품절'
      }
      return stockDetail
    }
  }
}
</script>

<style lang="scss" scoped>
.beer-card-wrapper {
  width: calc(100% - 20px);
  height: 144px;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  .beer-thumbnail {
    width: 56px;
    height: 80px;
    object-fit: cover;
    border: 1px solid #dedede;
  }
  .beer-detail {
    text-align: left;
    margin-left: 8px;
    div {
      height: 24px;
    }
    .beer-name {
      font-weight: 500;
    }
    .beer-tags {
      font-size: 12px;
    }
    .beer-price-wrapper {
      display: flex;
      line-height: 18px;
      .beer-price {
        font-weight: 600;
        margin-right: 4px;
      }
      .price-unit {
        font-size: 12px;
      }
    }
    .beer-stock {
      font-size: 14px;
    }
  }
  .button-wrapper {
    position: absolute;
    display: flex;
    right: 12px;
    bottom: 12px;
  }
}
</style>
