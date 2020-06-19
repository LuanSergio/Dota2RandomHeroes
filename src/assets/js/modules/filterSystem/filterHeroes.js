import getHeroesArray from '../../utils/getHeroesArray'
import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from './filters/filterHeroesByRole'
import removeHeroesByRole  from './filters/removeHeroesByRole'
import clearStates from '../heroesStates/clearStates' 
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removeTag from '../tagSystem/removeTag'
// import showErrorMessage from './showErrorMessage'

export default function filterHeroes() {
  let heroes = getHeroesArray();
  let auxHeroes = getHeroesArray();
  const categoryInput = document.querySelector('[data-heroes-role-input]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  const clearButton = document.querySelector('[data-clear-button');
  const filterTags = [];

  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      console.log('CHANGED HEROES', heroes);
      
      auxHeroes = heroes;
      filterHeroesByRole(auxHeroes, categoryInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      
      addStateToFilteredHeroes(auxHeroes);
    }
  });

  addButton.addEventListener('click', () => {
    console.log('heroes added', heroes);
    if(auxHeroes.length !== 0) {
      heroes = auxHeroes;
      if(categoryInput.value) {
        addTag(filterTags, categoryInput.value, '-add');
        printTag(filterTags);
        removeTag(heroes, filterTags);
        console.log('heroes OUT added', heroes);
      }
    }
  });

  removeButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = removeHeroesByRole(heroes, auxHeroes);
      addStateToFilteredHeroes(heroes);
      if(categoryInput.value) {
        addTag(filterTags, categoryInput.value, '-remove');
        printTag(filterTags);
        removeTag(heroes, filterTags);
      }
    }
  });

  clearButton.addEventListener('click', () => {
      heroes = getHeroesArray();
      clearStates();
  });
}
