import { heroesList } from '../../../data/index'
import { getHeroesArray } from './getHeroesArray'
import { filterArrayByCategory } from './filters/filterArrayByCategory'
import { showErrorMessage } from './showErrorMessage'
import { states } from './heroesStates/states'
import { selectHero } from './heroesStates/selectHero'
import { clearStates } from './heroesStates/clearStates'
import { deselectAllHeroes } from './heroesStates/deselectAllHeroes'

export function filterHeroes() {
  let heroes = getHeroesArray(heroesList);
  let auxHeroes = getHeroesArray(heroesList);
  const categoryInput = document.querySelector('[data-filter-heroes-input]');
  const addButton = document.querySelector('[data-add-button]');

  function returnFilteredHeroes(heroesArray, inputValue) { 
    const filteredArray = filterArrayByCategory(heroesArray, inputValue);
    return filteredArray
  }

  function noHeroCondition(){
    const settingsContainer = document.querySelector('[data-random-settings]');
    deselectAllHeroes(states);
    showErrorMessage(
      settingsContainer, 
      'There is no hero with those conditions.'
    );
  }

  function filter(heroes, auxHeroes) {
    categoryInput.addEventListener('change', () => {
      if(categoryInput.value) {
        // Return all heroes to array, if the array didn't have any hero
        if(heroes.length === 0){
          heroes = getHeroesArray(heroesList);
        }

        auxHeroes = heroes;
        auxHeroes = returnFilteredHeroes(auxHeroes, categoryInput.value);

        /*
          Check if there is any hero with that condition, if not, then return a error.
          If the conditions can be met, then just clear all the states
        */
        if(auxHeroes.length === 0) {
          noHeroCondition();
        } else {
          clearStates(heroes, states);
        }

        // Add the correct states to the heroes that were filtered
        auxHeroes.forEach(hero => {
          const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
          selectHero(heroName, states);
        });
      }
    });

    addButton.addEventListener('click', () => {
      heroes = auxHeroes;
    });
    
    return heroes;
  }

  filter(heroes, auxHeroes); 
}
