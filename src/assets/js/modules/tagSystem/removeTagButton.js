import clearErrorMessage from '../filterSystem/errors/clearErrorMessage'
import filterHeroesArray from '../filterSystem/filters/filterHeroesArray'
import removeTag from './removeTag'

export default function removeTagButton(heroes, filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', () => {
      removeTag(filterTags,  button.getAttribute("data-tags-items-remove"));
      clearErrorMessage();
      button.innerHTML = "";
      button.remove();
      filterHeroesArray(heroes, filterTags);
    });
  });
}
