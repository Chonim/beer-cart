<template>
  <div class="beer-card-wrapper">
    <img
      class="beer-thumbnail"
      :src="`/static/img/${item.image}`"
      :alt="item.name"
    >
    <div class="beer-detail">
      <div class="beer-name">{{ item.name }}</div>
      <div class="beer-tags">{{ item.tags.map(tag => tag.name).join(', ') }}</div>
      <div class="beer-price-wrapper">
        <div class="beer-price">{{ item.price }}</div>
        <div class="price-unit">원</div>
      </div>
      <div class="beer-stock">{{ item.stock }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeerCard',
  props: {
    item: {
      type: Object,
      required: true
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
      line-height: 16px;
      .beer-price {
        font-weight: 600;
        margin-right: 4px;
      }
      .price-unit {
        font-size: 12px;
      }
    }
  }
}
</style>
