import showErrorMessage from '../filterSystem/showErrorMessage'

export default function addTag(filterTags, input, status) {
  const value = input.value;
  const filterType = input.getAttribute('data-filter-input');
  
  
  const checkIfValueIsValid = Boolean(!(filterTags.some(tag => tag[filterType] === `${value}`)));

  if (checkIfValueIsValid) {
    filterTags.push({value: `${value}`, status: status});
  } else {
    showErrorMessage('You are already using this filter')
  }
}
