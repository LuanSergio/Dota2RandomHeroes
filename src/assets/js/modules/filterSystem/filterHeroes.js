import getHeroesArray from '../../utils/getHeroesArray';

import roleInputChange from './roleInputChange';
import heroInputChange from './heroInputChange';
import addRoleOnClick from './addRoleOnClick';
import removeRoleOnClick from './removeRoleOnClick';

import clearButton from './clearButton';

export default function filterHeroes() {
  const heroes = [];
  const auxHeroes = [];
  const filterTags = [];
  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);

  roleInputChange(heroes, auxHeroes);
  heroInputChange(heroes, auxHeroes);
  addRoleOnClick(heroes, auxHeroes, filterTags);
  removeRoleOnClick(heroes, auxHeroes, filterTags);

  clearButton(heroes, filterTags);
}
