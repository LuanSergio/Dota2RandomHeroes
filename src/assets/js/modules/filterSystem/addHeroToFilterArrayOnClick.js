import { states } from '../heroesStates/states'
import addTag from '../tagSystem/addTag'
import removeTag from '../tagSystem/removeTag'

import filterHeroesArray from './filters/filterHeroesArray'
import printTag from '../tagSystem/printTag'

export default function addHeroToFilterArrayOnClick(heroes, filterTags) {
  const galleryHeroes = document.querySelectorAll('[data-hero]');

  function checkIfTagExists(filterTags, value) {
    if(filterTags.filter(tag => tag.value.includes(value)).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  galleryHeroes.forEach(element => {
    element.addEventListener('click', () => { 
      const heroName = element.getAttribute('data-hero');

      if(checkIfTagExists(filterTags, heroName)) {
        addTag(heroes, filterTags, heroName, '-add');
        filterHeroesArray(heroes, filterTags);
      } else {
        removeTag(filterTags, heroName);
        printTag(filterTags);
        filterHeroesArray(heroes, filterTags);
      }
    });

    element.addEventListener('contextmenu', evt => { 
      const heroName = element.getAttribute('data-hero');
      element.classList.toggle(states.excluded);
      if(checkIfTagExists(filterTags, heroName)) {
        addTag(heroes, filterTags, heroName, '-remove');
        filterHeroesArray(heroes, filterTags);
      } else {
        removeTag(filterTags, heroName);
        printTag(filterTags);
        filterHeroesArray(heroes, filterTags);
      }
    });
  });
}
