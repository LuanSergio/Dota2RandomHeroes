import { heroesList } from '../../../../data/index'
import { getHeroesArray } from '../getHeroesArray'

import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from '../filters/filterHeroesByRole'
import removeHeroesByRole  from '../filters/removeHeroesByRole'
import clearStates from '../heroesStates/clearStates'

export function filterHeroes() {
  let heroes = getHeroesArray(heroesList);
  let auxHeroes = getHeroesArray(heroesList);
  const categoryInput = document.querySelector('[data-input-heroes-role]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  const clearButton = document.querySelector('[data-clear-button');
  
  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {

      auxHeroes = heroes;
      auxHeroes = filterHeroesByRole(auxHeroes, categoryInput.value);
      
      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
      console.log('aux', auxHeroes);
      console.log('heroes', heroes);
      
    }
  });

  addButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = auxHeroes;
    }
  });

  removeButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = removeHeroesByRole(heroes, auxHeroes);
      addStateToFilteredHeroes(heroes);
    }
  });

  clearButton.addEventListener('click', () => {
      heroes = getHeroesArray(heroesList);
      clearStates();
  });

}
