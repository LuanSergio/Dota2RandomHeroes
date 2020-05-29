import { states } from '../heroesStates/states'

import invalidCondition from './invalidCondition'
import clearStates from '../heroesStates/clearStates'

export default function checkIfFilterIsValid(heroes, auxHeroes){
  if(auxHeroes.length === 0) {
    invalidCondition();
  } 
  else {
    const errorContainer = document.querySelector('[data-error-message]');
    if(errorContainer) {
      errorContainer.remove();
    }
    clearStates(heroes, states);
  }
}
