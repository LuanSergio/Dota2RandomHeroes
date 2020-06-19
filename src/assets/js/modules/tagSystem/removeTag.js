import refreshFilterArray from '../filterSystem/refreshFilterArray'
import addStateToFilteredHeroes from '../filterSystem/addStateToFilteredHeroes'
import filterHeroesByRole from '../filterSystem/filters/filterHeroesByRole'
import getHeroesArray from '../../utils/getHeroesArray'

export default function removeTag(heroesArray, filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
  
  const removeRoleFromArray = (filterTags, role) => {
    filterTags.splice(filterTags.findIndex(tag => tag.role === `${role}`), 1);
  }

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', (event) => {
      removeRoleFromArray(filterTags, event.target.getAttribute("data-tags-items-remove"));
      // console.log('filterTags', filterTags);
      console.log('TAGS ARRAY', filterTags);
    
      refreshFilterArray(heroesArray);
      getHeroesArray(heroesArray);
      // console.log('hereosArray', heroesArray);
      console.log(filterTags.length);
      
      if (filterTags.length !== 0) {
        filterTags.forEach(filter => {
          console.log('before returning', heroesArray);
          
          filterHeroesByRole(heroesArray, filter.role);
          // console.log('array', heroesArray);
          
          // console.log('role', filter.role);
        });
      }
      
      addStateToFilteredHeroes(heroesArray);
  
      /*
        foreach
        heroes = filterHeroesByRole(auxHeroes, role);
      */
      event.target.parentNode.remove();
      return console.log('ARRAY AFTER ADDED STATE INSIDE REMOVE', heroesArray);
    });
    
  });
}
