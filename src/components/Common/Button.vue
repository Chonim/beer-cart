<template>
  <button
    class="box-shadow beer-button"
    :disabled="isDisabled"
    :style="{ ...buttonStyle }"
    @click="$emit('click')"
  >{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'BeerButton',
  props: {
    buttonText: {
      type: String,
      default: 'btbt'
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    buttonStyle: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
$button-height: 28px;

.beer-button {
  height: $button-height;
  line-height: $button-height;
  min-width: 44px;
  width: auto;
  color: #fff;
  background-color: #3369E8;
  border: '1px solid #3369E8';
  border-radius: 4px;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: content-box;
  &:disabled {
    color: grey;
    background-color: #c1c1c1;
  }
}
</style>
