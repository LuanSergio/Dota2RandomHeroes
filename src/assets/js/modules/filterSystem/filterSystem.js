import getHeroesArray from '../../utils/getHeroesArray';

import addHeroToFilterArrayOnClick from './addHeroToFilterArrayOnClick'
import inputChangeFilter from './inputChangeFilter';
import buttonAddToFiltersArray from './buttonAddToFiltersArray';
import buttonRemoveFromFiltersArray from './buttonRemoveFromFiltersArray';
import buttonClearFiltersArray from './buttonClearFiltersArray';

export default function filter(heroes, filterTags) {
  const auxHeroes = [];
  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);
  
  addHeroToFilterArrayOnClick(heroes, filterTags);
  inputChangeFilter(heroes, filterTags);
  
  buttonAddToFiltersArray(heroes, filterTags);
  buttonRemoveFromFiltersArray(heroes, filterTags);
  buttonClearFiltersArray(heroes, filterTags);
}
