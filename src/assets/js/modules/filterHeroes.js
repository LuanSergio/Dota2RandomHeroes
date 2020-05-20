import { heroesList } from '../../../data/index'
import { getHeroesArray } from './getHeroesArray'
import { filterArrayByCategory } from './filters/filterArrayByCategory'
import { selectHero } from './heroesStates/selectHero'
import { clearStates } from './heroesStates/clearStates'

export function filterHeroes() {
  let heroes = getHeroesArray(heroesList);
  let auxHeroes = getHeroesArray(heroesList);
  const categoryInput = document.querySelector('[data-filter-heroes-input]');
  const addButton = document.querySelector('[data-add-button]');
  const states = {
    selected: '-selected',
    excluded: '-excluded',
    notSelected: '-notSelected'
  }
  
  function selectFilteredHeroes(heroesArray, inputValue) { 
    const filteredArray = filterArrayByCategory(heroesArray, inputValue);
    return filteredArray
  }

  function returnFilteredArray(array, value) {
    array = selectFilteredHeroes(array, value);
    return array;
  }

  function change(heroes, auxHeroes) {
    categoryInput.addEventListener('change', () => {
      if(categoryInput.value) {
        auxHeroes = heroes;
        auxHeroes = returnFilteredArray(auxHeroes, categoryInput.value);
        
        clearStates(heroes, states);
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

  change(heroes, auxHeroes); 
}
