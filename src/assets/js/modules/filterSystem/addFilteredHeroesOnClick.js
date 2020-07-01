import copyArrayElements from '../../utils/copyArrayElements'
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removeTag from '../tagSystem/removeTag'
import clearTextInputs from '../inputSettings/clearTextInputs'
import checkIfFilterIsValid from './checkIfFilterIsValid'
import showErrorMessage from './showErrorMessage'

export default function addFilteredHeroesOnClick(heroes, auxHeroes, filterTags) {
  const addButton = document.querySelector('[data-add-button]');

  addButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('[data-filter-input]');
    
    inputs.forEach(input => {
      if(input.value) {
        const filterType = input.getAttribute('data-filter-input');
        if(checkIfFilterIsValid(auxHeroes, filterType, input.value)) {
          copyArrayElements(heroes, auxHeroes);
          addTag(filterTags, input.value, '-add');
          printTag(filterTags);
          removeTag(heroes, filterType, filterTags);
          clearTextInputs();
        } else {
          showErrorMessage('There is no hero with those conditions.');
        }
      }
    });
  });
}
