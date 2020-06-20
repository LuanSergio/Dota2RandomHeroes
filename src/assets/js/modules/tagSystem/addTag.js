import showErrorMessage from '../filterSystem/showErrorMessage'

export default function addTag(filterTags, role, status) {
  if (!(filterTags.some(tag => tag.role === `${role}`))) {
    filterTags.push({role: `${role}`, status: status});
  } else {
    showErrorMessage('You are already using this filter')
  }
}
