import getHeroesArray from '../../utils/getHeroesArray';

import inputChangeFilter from './inputChangeFilter';
import addFilteredHeroesOnClick from './addFilteredHeroesOnClick';
import removeFilteredHeroesOnClick from './removeFilteredHeroesOnClick';

import clearButton from './clearButton';

export default function filterHeroes() {
  const heroes = [];
  const auxHeroes = [];
  const filterTags = [];
  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);
  
  inputChangeFilter(heroes, auxHeroes);
  addFilteredHeroesOnClick(heroes, auxHeroes, filterTags);
  removeFilteredHeroesOnClick(heroes, auxHeroes, filterTags);
  
  clearButton(heroes, filterTags);
}
