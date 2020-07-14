import getHeroesArray from '../../utils/getHeroesArray';

import inputChangeFilter from './inputChangeFilter';
import buttonAddToFiltersArray from './buttonAddToFiltersArray';
import buttonRemoveFromFiltersArray from './buttonRemoveFromFiltersArray';
import buttonClearFiltersArray from './buttonClearFiltersArray';

export default function filter(heroes, filterTags) {
  const auxHeroes = [];
  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);
  
  inputChangeFilter(heroes, auxHeroes);
  
  buttonAddToFiltersArray(heroes, filterTags);
  buttonRemoveFromFiltersArray(heroes, filterTags);
  buttonClearFiltersArray(heroes, filterTags);
}
