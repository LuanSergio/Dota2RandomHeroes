import showErrorMessage from './showErrorMessage'

export default function checkIfFilterIsValid(auxHeroes){
  if(auxHeroes.length === 0) {
    showErrorMessage('There is no hero with those conditions.');
  } 
  else {
    const errorContainer = document.querySelector('[data-error-message]');
    if(errorContainer) {
      errorContainer.remove();
    }
  }
}
