import getHeroesArray from '../../utils/getHeroesArray'
import clearArray from '../../utils/clearArray' 
import clearStates from '../heroesStates/clearStates' 
import clearTagContainer from '../tagSystem/clearTagContainer'
import clearRandomContainer from '../randomSystem/clearRandomContainer'
import clearTextInputs from '../inputSettings/clearTextInputs'
import clearQuantityInput from '../inputSettings/clearQuantityInput'

export default function buttonClearFiltersArray(heroes, filterTags){
  const clearButton = document.querySelector('[data-clear-button');
  
  clearButton.addEventListener('click', () => {
    clearTagContainer();
    clearRandomContainer();
    clearArray(heroes);
    clearArray(filterTags);
    clearStates();
    clearQuantityInput();
    clearTextInputs();
    getHeroesArray(heroes);
  });
}
