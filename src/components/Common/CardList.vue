<template>
  <div class="card-list-wrapper">
    <beer-card
      v-for="(card, index) in cardList"
      v-show="index < maxCards"
      :key="card.key"
      :item="card"
    />
    <beer-button
      v-show="maxCards < cardList.length"
      button-text="더보기 +"
      :button-style="moreButtonStyle"
      @click="maxCards += itemPerPage"
    />
  </div>
</template>

<script>
import { ITEM_PER_PAGE } from '@/config'
import BeerCard from '@/components/Common/Card'
import BeerButton from '@/components/Common/Button'

export default {
  name: 'CardList',
  components: {
    BeerCard,
    BeerButton
  },
  props: {
    cardList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      itemPerPage: ITEM_PER_PAGE, // bind for access from html template
      maxCards: ITEM_PER_PAGE
    }
  },
  watch: {
    cardList () {
      // initialize the number of max cards on list change
      this.maxCards = ITEM_PER_PAGE
    }
  },
  computed: {
    moreButtonStyle () {
      return {
        color: '#95959E',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: '#fff',
        height: '38px',
        border: '1px solid #dedede',
        borderRadius: '16px',
        boxSizing: 'border-box',
        marginTop: '4px',
        marginBottom: '24px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
