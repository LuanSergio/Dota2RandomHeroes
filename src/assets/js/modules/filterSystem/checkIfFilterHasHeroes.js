import showErrorMessage from './showErrorMessage'

export default function checkIfFilterHasHeroes(heroes){
  if(heroes.length === 0) {
    showErrorMessage('There is no hero with those conditions.');
    return false;
  } 
  else {
    const errorContainer = document.querySelector('[data-error-message]');
    if(errorContainer) {
      errorContainer.remove();
    }
    return true;
  }
}
