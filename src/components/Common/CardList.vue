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
      @click="maxCards += 5"
    />
  </div>
</template>

<script>
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
      maxCards: 5
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
