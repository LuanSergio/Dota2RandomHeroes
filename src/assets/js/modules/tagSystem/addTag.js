import showErrorMessage from '../filterSystem/errors/showErrorMessage'
import clearErrorMessage from '../filterSystem/errors/clearErrorMessage'
import clearTextInputs from '../inputSettings/clearTextInputs'
import removeTagButton from './removeTagButton'
import printTag from './printTag'

export default function addTag(heroes, filterTags, value, status) {

  if(filterTags.filter(tag => tag.value.includes(value)).length === 0) {
    clearErrorMessage();
    filterTags.push({value: `${value}`, status: status});
    printTag(filterTags)
    clearTextInputs();
  } else {
    showErrorMessage('You are already using this filter')
  }

  removeTagButton(heroes, filterTags);
}
