<template>
  <div class="tag-list-wrapper">
    <beer-button
      v-for="tag in getTagList"
      class="tag-entity"
      :key="tag.key"
      :button-text="tag.name"
      :button-style="getButtonStyle(tag.isChecked)"
      @click="toggleTag(tag)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerButton from '@/components/Common/Button'

export default {
  name: 'TagList',
  components: {
    BeerButton
  },
  data () {
    return {
      tagList: []
    }
  },
  computed: {
    ...mapGetters('tag', ['getTagList']),
    offButtonStyle () {
      return {
        color: '#3369E8',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: '1px solid #3369E8'
      }
    },
    checkedTags () {
      return this.tagList.filter(tag => tag.isChecked)
    }
  },
  methods: {
    ...mapActions('tag', ['toggleTag']),
    getButtonStyle (isChecked) {
      return isChecked ? {} : this.offButtonStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-list-wrapper {
  max-width: 100vw;
  overflow-x: scroll;
  height: 52px;
  display: flex;
  align-items: center;
  .tag-entity {
    margin-right: 8px;
    &:first-child {
      margin-left: 16px;
    }
  }
}
</style>
