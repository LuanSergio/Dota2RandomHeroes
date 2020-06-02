import invalidCondition from './invalidCondition'

export default function checkIfFilterIsValid(heroes, auxHeroes){
  if(auxHeroes.length === 0) {
    invalidCondition();
  } 
  else {
    const errorContainer = document.querySelector('[data-error-message]');
    if(errorContainer) {
      errorContainer.remove();
    }
  }
}
