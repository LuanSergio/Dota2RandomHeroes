import { states } from './states'
import getHeroesArray from '../../utils/getHeroesArray'

import selectHero from './selectHero'
import excludeHero from './excludeHero'

import filterHeroes from '../filterSystem/filters/filterHeroes';
import removeFilteredHeroes from '../filterSystem/filters/removeFilteredHeroes';
import addStateToFilteredHeroes from '../filterSystem/addStateToFilteredHeroes';
import addHeroToFilterOnClick from '../filterSystem/addHeroToFilterOnClick';

export default function addHeroStateOnClick(heroes) {
  const heroesElements = document.querySelectorAll('[data-hero]');
  // const clickArray = [];
  const heroesArrayLength = getHeroesArray().map( hero => hero.name).length;
  
  heroesElements.forEach(hero => {
    hero.addEventListener('click', () => { 
     if(!(hero.getAttribute('data-selection'))) {
      selectHero(hero, states);
      if(heroes.length === heroesArrayLength) {
        //clear
        heroes.push(); 
      }
      addHeroToFilterOnClick(heroes, hero.getAttribute('data-hero'));
      
     } else if (hero.getAttribute('data-selection') === "active") {
        selectHero(hero, states);
        clickArray.splice(clickArray.findIndex(hero => name === name.getAttribute('data-hero')), 1);
        removeFilteredHeroes(heroes, hero.getAttribute('data-hero'));
     }
    });

    hero.addEventListener('contextmenu', evt => { excludeHero(hero, evt, states) });
  });
}
