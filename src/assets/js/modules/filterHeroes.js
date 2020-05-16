import { heroesList } from '../../../data/index'
import { getHeroesArray } from './getHeroesArray'
import { filterByCategory } from './filters/filterByCategory'

export function filterHeroes() {
  const heroes = getHeroesArray(heroesList);
  
  filterByCategory(heroes);
}
