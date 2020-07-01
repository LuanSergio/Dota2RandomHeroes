import showErrorMessage from '../filterSystem/showErrorMessage'

export default function addTag(filterTags, value, status) {
  
  const checkIfValueIsValid = Boolean(!(filterTags.some(tag => tag.value === `${value}`)));
  
  if (checkIfValueIsValid) {
    filterTags.push({value: `${value}`, status: status});
  } else {
    showErrorMessage('You are already using this filter')
  }
}
