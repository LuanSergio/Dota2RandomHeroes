import clearArray from '../../utils/clearArray'
import addStateToFilteredHeroes from '../filterSystem/addStateToFilteredHeroes'
import filterHeroes from '../filterSystem/filters/filterHeroes'
import removeFilteredHeroes from '../filterSystem/filters/removeFilteredHeroes'
import getHeroesArray from '../../utils/getHeroesArray'
import clearStates from '../heroesStates/clearStates'

export default function removeTag(heroesArray, filterType, filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
  
  const removeExcludedFromArray = (filterTags, value) => {
    filterTags.splice(filterTags.findIndex(tag => tag.value === `${value}`), 1);
  }

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', (event) => {
      removeExcludedFromArray(filterTags, event.target.getAttribute("data-tags-items-remove"));
    
      clearArray(heroesArray);
      getHeroesArray(heroesArray);
      
      if (filterTags.length !== 0) {
        filterTags.forEach(filter => {
          if(filter.status !== '-remove') {
            filterHeroes(heroesArray, filterType, filter.value);
          } else {
            removeFilteredHeroes(heroesArray, filterType, filter.value);
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
