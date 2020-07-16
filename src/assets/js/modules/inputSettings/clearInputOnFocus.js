import clearTextInputs from './clearTextInputs'
import filterHeroesArray from '../filterSystem/filters/filterHeroesArray'
import clearErrorMessage from '../filterSystem/errors/clearErrorMessage'

export default function clearInputOnFocus(heroes, filterTags) {
  const inputGroup = document.querySelectorAll(`[data-filter-input]`);
  const quantityInput = document.querySelector('[data-random-quantity-input]');

  inputGroup.forEach(input => {
    input.addEventListener('click', () => { 
      clearErrorMessage();
      clearTextInputs();
      quantityInput.value = '';

      filterHeroesArray(heroes, filterTags);
      if(input.value){
         input.value = '';
         input.blur();
         input.focus();
      } 
    });
  }); 
}
