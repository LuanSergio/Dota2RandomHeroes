import { heroesList } from '../../../data/index'
import { getHeroesArray } from './getHeroesArray'
import { filterByCategory } from './filters/filterByCategory'

export function filterHeroes() {
  const heroes = getHeroesArray(heroesList);
  const categoryInput = document.querySelector('[data-filter-heroes-input]');

  categoryInput.addEventListener('change', () => {
    const filteredArray = filterByCategory(heroes, categoryInput);
    console.log(filteredArray);
    
  });
}
