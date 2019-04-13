import {
  getCheckedTags
} from '@/utils/tags-filter'

export default {
  getTagList: state => state.tagList,
  getCheckedTags: state => getCheckedTags(state.tagList),
  isAllTagsChecked: state => state.tagList.every(tag => tag.isChecked)
}
