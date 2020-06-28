import copyArrayElements from '../../utils/copyArrayElements'
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removedTag from '../tagSystem/removedTag'

export default function addRoleOnClick(heroes, auxHeroes, filterTags) {
  const addButton = document.querySelector('[data-add-button]');

  addButton.addEventListener('click', () => {
    const value = document.querySelector('[data-heroes-role-input]').value || 
                  document.querySelector('[data-search-hero-input]').value;

    
    if(auxHeroes.length !== 0) {
      copyArrayElements(heroes, auxHeroes);

      if(value) {
        addTag(filterTags, value, '-add');
        printTag(filterTags);
        removedTag(heroes, filterTags);
      }
    }
  });
}