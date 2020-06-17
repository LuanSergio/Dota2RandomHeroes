import getHeroesArray from '../../utils/getHeroesArray'
import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from './filters/filterHeroesByRole'
import removeHeroesByRole  from './filters/removeHeroesByRole'
import clearStates from '../heroesStates/clearStates' 
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removeTag from '../tagSystem/removeTag'
import showErrorMessage from './showErrorMessage'

export default function filterHeroes() {
  let heroes = getHeroesArray();
  let auxHeroes = getHeroesArray();
  const categoryInput = document.querySelector('[data-heroes-role-input]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  const clearButton = document.querySelector('[data-clear-button');
  const filterTags = [];

  //create tagSystem

  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      auxHeroes = heroes;
      auxHeroes = filterHeroesByRole(auxHeroes, categoryInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
    }
  });



  //tags functions


  

  //end of tags functions

  addButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = auxHeroes;
      if(categoryInput.value) {
        addTag(filterTags, categoryInput.value, true);
        printTag(filterTags);
        removeTag(filterTags);
        console.log(filterTags);
      }
    }
  });

  removeButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = removeHeroesByRole(heroes, auxHeroes);
      addStateToFilteredHeroes(heroes);
      addTag(categoryInput.value, false);
      removeTag(filterTags);
    }
  });

  clearButton.addEventListener('click', () => {
      heroes = getHeroesArray();
      clearStates();
  });
}
