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

        if(checkIfFilterIsValid(auxHeroes, input.value)) {
          copyArrayElements(heroes, auxHeroes);
          addTag(filterTags, input.value, '-add');
          printTag(filterTags);
          removeTag(heroes, filterTags);
          clearTextInputs();
        } else {
          showErrorMessage('There is no hero with those conditions.');
        }
      }
    });
  });
}
