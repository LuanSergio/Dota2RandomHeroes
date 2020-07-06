import getHeroesArray from '../../utils/getHeroesArray';

import inputChangeFilter from './inputChangeFilter';
import addFilteredHeroesOnClick from './addFilteredHeroesOnClick';
import removeFilteredHeroesOnClick from './removeFilteredHeroesOnClick';

import clearButton from './clearButton';

export default function filter(heroes) {
  const filterTags = [];
  const auxHeroes = [];

  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);
  
  inputChangeFilter(heroes, auxHeroes);
  addFilteredHeroesOnClick(heroes, auxHeroes, filterTags);
  removeFilteredHeroesOnClick(heroes, auxHeroes, filterTags);
  
  clearButton(heroes, filterTags);
}
