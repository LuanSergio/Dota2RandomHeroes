import clearErrorMessage from '../filterSystem/errors/clearErrorMessage'
import filterHeroesArray from '../filterSystem/filters/filterHeroesArray'

export default function removeTag(heroes, filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');

  const removeExcludedTagFromArray = (filterTags, value) => {
    filterTags.splice(filterTags.findIndex(tag => tag.value === `${value}`), 1);
  }

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', event => {
      removeExcludedTagFromArray(filterTags, event.target.getAttribute("data-tags-items-remove"));
      clearErrorMessage();
      event.target.parentNode.remove();
      filterHeroesArray(heroes, filterTags);
    });
  });
}
