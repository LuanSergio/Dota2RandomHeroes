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
  let heroes = [];
  let auxHeroes = [];
  getHeroesArray(heroes);
  getHeroesArray(auxHeroes);
  console.log('HERG', heroes);
  console.log('AUX',auxHeroes);
  
  const categoryInput = document.querySelector('[data-heroes-role-input]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  const clearButton = document.querySelector('[data-clear-button');
  const filterTags = [];
  let removeTagButton;
  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      console.log('ARRAY WHEN INPUT CHANGED', heroes);
      console.log('AUX ARRAY WHEN INPUT CHANGED', auxHeroes);
      
      auxHeroes = heroes;
      filterHeroesByRole(auxHeroes, categoryInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      
      addStateToFilteredHeroes(auxHeroes);
    }
  });

  addButton.addEventListener('click', () => {
    console.log('HEROES ON CLICK ADD', heroes);
    if(auxHeroes.length !== 0) {
      heroes = auxHeroes;
      if(categoryInput.value) {
        addTag(filterTags, categoryInput.value, '-add');
        printTag(filterTags);
        removeTag(heroes, filterTags);
        removeTagButton = document.querySelector('[data-tags-items-remove]');
        console.log('HEROES ON CLICK ADD INSIDE IF', heroes);
        removeTagButton.addEventListener('click', () => console.log('ARRAY HEROES', heroes));
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
      getHeroesArray(heroes);
      clearStates();
  });
}
