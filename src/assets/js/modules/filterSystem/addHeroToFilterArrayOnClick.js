import { states } from '../heroesStates/states'
import getHeroesArray from '../../utils/getHeroesArray'
import addTag from '../tagSystem/addTag'
import removeTag from '../tagSystem/removeTag'

import selectHero from '../heroesStates/selectHero'
import excludeHero from '../heroesStates/excludeHero'
import filter from './filters/filterHeroesArray';

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
      console.log('heroName', heroName);
      console.log('tags', filterTags);

      if(checkIfTagExists(filterTags, heroName)) {
        addTag(heroes, filterTags, heroName, '-add');
        filterHeroesArray(heroes, filterTags);
      } else {
        removeTag(filterTags);
        printTag(filterTags);
        filterHeroesArray(heroes, filterTags);
      }
    });

    element.addEventListener('contextmenu', evt => { excludeHero(hero, evt, states) });
  });
}
