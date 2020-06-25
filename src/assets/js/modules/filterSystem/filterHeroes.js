import getHeroesArray from '../../utils/getHeroesArray'
import clearArray from '../../utils/clearArray' 
import copyArrayElements from '../../utils/copyArrayElements'

import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from './filters/filterHeroesByRole'
import removeHeroesByRole  from './filters/removeHeroesByRole'
import clearStates from '../heroesStates/clearStates' 
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removedTag from '../tagSystem/removedTag'
import clearTagContainer from '../tagSystem/clearTagContainer'
import clearRandomContainer from '../randomSystem/clearRandomContainer'

export default function filterHeroes() {
  const heroes = [];
  const auxHeroes = [];
  let removeTagButton;
  const categoryInput = document.querySelector('[data-heroes-role-input]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  const clearButton = document.querySelector('[data-clear-button');
  const filterTags = [];
  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);

  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      // auxHeroes = heroes.slice(0);
      copyArrayElements(auxHeroes, heroes);
      console.log('AUX', auxHeroes);
      console.log('heroes', heroes);
      
      filterHeroesByRole(auxHeroes, categoryInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
    }
  });

  addButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      // heroes = auxHeroes;
      copyArrayElements(heroes, auxHeroes);

      if(categoryInput.value) {
        addTag(filterTags, categoryInput.value, '-add');
        printTag(filterTags);
        removedTag(heroes, filterTags);
        removeTagButton = document.querySelector('[data-tags-items-remove]');
      }
    }
  });

  removeButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      removeHeroesByRole(heroes, categoryInput.value);
      addStateToFilteredHeroes(heroes);
      if(categoryInput.value) {
        addTag(filterTags, categoryInput.value, '-remove');
        printTag(filterTags);
        removedTag(heroes, filterTags);
      }
    }
  });

  clearButton.addEventListener('click', () => {
    clearTagContainer();
    clearRandomContainer();
    clearArray(heroes);
    clearStates();
    clearArray(filterTags);
    getHeroesArray(heroes);
  });
}
