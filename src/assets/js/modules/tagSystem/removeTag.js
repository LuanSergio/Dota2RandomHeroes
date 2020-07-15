export default function removeTagFromArray(filterTags, value) {
  filterTags.splice(filterTags.findIndex(tag => tag.value === `${value}`), 1);
}
