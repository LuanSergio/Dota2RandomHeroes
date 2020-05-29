import { heroesList } from '../../../../data/index'
import { getHeroesArray } from '../getHeroesArray'

import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from '../filters/filterHeroesByRole'
import removeHeroesByRole  from '../filters/removeHeroesByRole'

export function filterHeroes() {
  let heroes = getHeroesArray(heroesList);
  let auxHeroes = getHeroesArray(heroesList);
  const categoryInput = document.querySelector('[data-input-heroes-role]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  
  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      if(heroes.length === 0){
        heroes = getHeroesArray(heroesList);
      }

      auxHeroes = heroes;
      auxHeroes = filterHeroesByRole(auxHeroes, categoryInput.value);

      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
    }
  });

  addButton.addEventListener('click', () => {
    heroes = auxHeroes;
  });

  removeButton.addEventListener('click', () => {
    heroes = removeHeroesByRole(heroes, auxHeroes);
  });
}
