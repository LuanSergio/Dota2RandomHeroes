import clearFilterArray from '../filterSystem/clearFilterArray'
import addStateToFilteredHeroes from '../filterSystem/addStateToFilteredHeroes'
import filterHeroesByRole from '../filterSystem/filters/filterHeroesByRole'
import removeHeroesByRole from '../filterSystem/filters/removeHeroesByRole'
import getHeroesArray from '../../utils/getHeroesArray'
import clearStates from '../heroesStates/clearStates'

export default function removeTag(heroesArray, filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
  
  const removeRoleFromArray = (filterTags, role) => {
    filterTags.splice(filterTags.findIndex(tag => tag.role === `${role}`), 1);
  }

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', (event) => {
      removeRoleFromArray(filterTags, event.target.getAttribute("data-tags-items-remove"));
    
      clearFilterArray(heroesArray);
      getHeroesArray(heroesArray);
      
      if (filterTags.length !== 0) {
        filterTags.forEach(filter => {
          if(filter.status != '-remove') {
            filterHeroesByRole(heroesArray, filter.role);
          } else {
            removeHeroesByRole(heroesArray, filter.role);
          }
        });
        addStateToFilteredHeroes(heroesArray);
      } 
      else {
        clearStates();
      }
      
      event.target.parentNode.remove();
    });
  });
}
