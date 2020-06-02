import showErrorMessage from '../showErrorMessage'

export default function noHeroCondition(){
  const settingsContainer = document.querySelector('[data-random-settings]');
  showErrorMessage(
    settingsContainer, 
    'There is no hero with those conditions.'
  );
}
