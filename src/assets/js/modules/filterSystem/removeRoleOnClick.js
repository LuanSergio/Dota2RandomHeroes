import removeHeroesByRole  from './filters/removeHeroesByRole'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removedTag from '../tagSystem/removedTag'
import clearInputs from './clearInputs'

export default function removeRoleOnClick(heroes, auxHeroes, filterTags) {
  const removeButton = document.querySelector('[data-remove-button]');

  removeButton.addEventListener('click', () => {
    let value = document.querySelector('[data-heroes-role-input]').value || 
    document.querySelector('[data-search-hero-input]').value;
    
    if(auxHeroes.length !== 0 && value) {
      removeHeroesByRole(heroes, value);
      addStateToFilteredHeroes(heroes);
      addTag(filterTags, value, '-remove');
      printTag(filterTags);
      removedTag(heroes, filterTags);
      clearInputs();
    }
  });
}