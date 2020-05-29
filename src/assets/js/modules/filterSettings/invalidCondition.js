import { states } from '../heroesStates/states'

import deselectAllHeroes from '../heroesStates/deselectAllHeroes'
import showErrorMessage from '../showErrorMessage'

export default function noHeroCondition(){
  const settingsContainer = document.querySelector('[data-random-settings]');
  deselectAllHeroes(states);
  showErrorMessage(
    settingsContainer, 
    'There is no hero with those conditions.'
  );
}
