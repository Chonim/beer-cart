<template>
  <header class="header-wrapper">
    <div class="header-title">맥주담기</div>
    <img
      class="icon"
      v-for="icon in icons"
      :key="icon.routeName"
      :src="`/static/img/${icon.icon}${getIconSuffix(icon.routeName)}.svg`"
      :alt="icon.alt"
      @click="$router.push({ name: icon.routeName })"
    >
    <!-- <img
      src="/static/img/cart.svg"
      class="icon"
      alt="List icon"
    > -->
    <div
      class="cart-badge"
      v-show="cartItems.length"
    >{{ cartItems.length }}</div>
  </header>
</template>

<script>
export default {
  name: 'BeerHeder',
  data () {
    return {
      cartItems: [],
      icons: [
        {
          icon: 'list',
          alt: 'List icon',
          routeName: 'BeerList'
        },
        {
          icon: 'cart',
          alt: 'Cart icon',
          routeName: 'BeerCart'
        }
      ]
    }
  },
  methods: {
    getIconSuffix (routeName) {
      return this.$route.name === routeName ? '-active' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
$icon-size: 24px;
$badge-size: 16px;

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  .header-title {
    font-size: 20px;
    width: calc(100% - 72px);
    text-align: left;
  }
  .icon {
    height: $icon-size;
    width: $icon-size;;
    cursor: pointer;
  }
  .cart-badge {
    position: absolute;
    right: 10px;
    top: 8px;
    color: #fff;
    font-size: 12px;
    background-color: #EF5350;
    border-radius: 50%;
    width: $badge-size;
    height: $badge-size;
    line-height: $badge-size;
  }
}
</style>
