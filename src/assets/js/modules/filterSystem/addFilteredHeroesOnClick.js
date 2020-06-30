import copyArrayElements from '../../utils/copyArrayElements'
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removeTag from '../tagSystem/removeTag'
import clearTextInputs from '../inputSettings/clearTextInputs'

export default function addFilteredHeroesOnClick(heroes, auxHeroes, filterTags) {
  const addButton = document.querySelector('[data-add-button]');

  addButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('[data-filter-input]');
    
    if(auxHeroes.lenght !== 0) {
      copyArrayElements(heroes, auxHeroes);

      inputs.forEach(input => {
        if(input.value) {
          const filterType = input.getAttribute('data-filter-input');
          addTag(filterTags, input, '-add');
          printTag(filterTags);
          removeTag(heroes, filterType, filterTags);
          clearTextInputs();
        }
      });
    }
  });
}
