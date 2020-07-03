import clearArray from '../../utils/clearArray'
import addStateToFilteredHeroes from '../filterSystem/addStateToFilteredHeroes'
import filterHeroes from '../filterSystem/filters/filterHeroes'
import removeFilteredHeroes from '../filterSystem/filters/removeFilteredHeroes'
import clearErrorMessage from '../filterSystem/clearErrorMessage'
import getHeroesArray from '../../utils/getHeroesArray'
import clearStates from '../heroesStates/clearStates'


export default function removeTag(heroesArray, filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
  
  const removeExcludedFilterFromArray = (filterTags, value) => {
    filterTags.splice(filterTags.findIndex(tag => tag.value === `${value}`), 1);
  }

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', (event) => {
      removeExcludedFilterFromArray(filterTags, event.target.getAttribute("data-tags-items-remove"));
      clearErrorMessage();
      clearArray(heroesArray);
      getHeroesArray(heroesArray);
      
      if (filterTags.length !== 0) {
        filterTags.forEach(filter => {
          if(filter.status !== '-remove') {
            filterHeroes(heroesArray, filter.value);
          } else {
            removeFilteredHeroes(heroesArray, filter.value);
          }
        });
        addStateToFilteredHeroes(heroesArray);
      } else {
        clearStates();
      }
      
      event.target.parentNode.remove();
    });
  });
}
