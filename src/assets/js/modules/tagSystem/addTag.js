import showErrorMessage from '../filterSystem/showErrorMessage'

export default function addTag(filterTags, value, status) {
  const checkIfValueIsValid = Boolean(
    !(filterTags.some(tag => tag.role === `${value}`)) && 
    !(filterTags.some(tag => tag.name === `${value}`))
  );

  if (checkIfValueIsValid) {
    filterTags.push({role: `${value}`, status: status});
  } else {
    showErrorMessage('You are already using this filter')
  }
}
