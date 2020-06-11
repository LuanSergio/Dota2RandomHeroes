import { getHeroesArray } from '../getHeroesArray'

import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from '../filters/filterHeroesByRole'
import removeHeroesByRole  from '../filters/removeHeroesByRole'
import clearStates from '../heroesStates/clearStates'
import showErrorMessage from './showErrorMessage'

export function filterHeroes() {
  let heroes = getHeroesArray();
  let auxHeroes = getHeroesArray();
  const categoryInput = document.querySelector('[data-heroes-role-input]');
  const addButton = document.querySelector('[data-add-button]');
  const removeButton = document.querySelector('[data-remove-button]');
  const clearButton = document.querySelector('[data-clear-button');
  const filterTags = [];

  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      auxHeroes = heroes;
      auxHeroes = filterHeroesByRole(auxHeroes, categoryInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
    }
  });

  function addTag(role, status) {
    if (!(filterTags.some(tag => tag.role === `${role}`))) {
      filterTags.push({role: `${role}`, status: status});
    } else {
      showErrorMessage('You are already using this filter')
    }
  }

  function printTag(filterTags) {
    const container = document.querySelector('[data-tags-container]');
    if(filterTags) {
      container.classList.remove('h-hidden');
    } else {
      container.classList.add('h-hidden');
    }
    container.innerHTML = '';
    filterTags.forEach((tag) => {
      container.insertAdjacentHTML(
        'beforeend', 
        `<li class="c-settings__tag-item">
          <button class="c-settings__tag-icon" data-tags-items-remove="${tag.role}"></button>
          <span class="c-settings__tag-text">${tag.role}</span>
        </li>`
      );
    });
  }

  function removeRoleFromArray(role) {
    filterTags.splice(filterTags.findIndex(tag => tag.role === `${role}`), 1);
  }

  function removeTag() {
    const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
    
    removeTagButton.forEach( (button) => {
      button.addEventListener('click', (event) => {
        removeRoleFromArray(event.target.getAttribute("data-tags-items-remove"));
        event.target.parentNode.remove();
      });

    });
  }
  
  addButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = auxHeroes;
      if(categoryInput.value) {
        addTag(categoryInput.value, true);
        printTag(filterTags);
        removeTag();
        console.log(filterTags);
      }
    }
  });

  removeButton.addEventListener('click', () => {
    if(auxHeroes.length !== 0) {
      heroes = removeHeroesByRole(heroes, auxHeroes);
      addStateToFilteredHeroes(heroes);
      addTag(categoryInput.value, false);
      removeTag();
    }
  });

  clearButton.addEventListener('click', () => {
      heroes = getHeroesArray();
      clearStates();
  });
}
