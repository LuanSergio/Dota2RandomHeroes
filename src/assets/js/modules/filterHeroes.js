import { heroesList } from '../../../data/index'
import { getHeroesArray } from './getHeroesArray'
import { filterArrayByCategory } from './filters/filterArrayByCategory'
import { selectHero } from './heroesStates/selectHero'
import { clearStates } from './heroesStates/clearStates'

export function filterHeroes() {
  let heroes = getHeroesArray(heroesList);
  const categoryInput = document.querySelector('[data-filter-heroes-input]');
  const states = {
    selected: '-selected',
    excluded: '-excluded',
    notSelected: '-notSelected'
  }

  function selectFilteredHeroes(heroesArray, inputValue) {
    const filteredArray = filterArrayByCategory(heroesArray, inputValue);

    filteredArray.forEach(hero => {
      const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
      selectHero(heroName, states);
    });
    
    return filteredArray
  }

  categoryInput.addEventListener('change', () => {
    const inputValue = categoryInput.value;

    clearStates(heroes, states);
    heroes = selectFilteredHeroes(heroes, inputValue);
  });
}
