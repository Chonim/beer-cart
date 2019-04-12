<template>
  <div class="tag-list-wrapper">
    <beer-button
      v-for="tag in tagList"
      class="tag-entity"
      :key="tag.key"
      :button-text="tag.name"
      :button-style="getButtonStyle(tag.isChecked)"
      @click="toggleTag(tag)"
    />
  </div>
</template>

<script>
import api from '@/api'
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
    async getTags () {
      const tagList = await api('getTags')
      this.tagList = tagList.map(tag => ({
        ...tag,
        isChecked: false
      }))
    },
    getButtonStyle (isChecked) {
      return isChecked ? {} : this.offButtonStyle
    },
    toggleTag ({ key, isChecked }) {
      const matchedTag = this.tagList.find(tag => tag.key === key)
      this.$set(matchedTag, 'isChecked', !isChecked)
    }
  },
  created () {
    this.getTags()
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
    margin-left: 8px;
  }
}
</style>
