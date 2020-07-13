import { states } from '../heroesStates/states'
import clearStates from '../heroesStates/clearStates'
import selectHero from '../heroesStates/selectHero'

export default function addStateToFilteredHeroes(heroes) {
  // if(heroes.length !== 0) {
  //   clearStates(states);
  // }
  clearStates(states);

  heroes.forEach(hero => {
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    selectHero(heroName, states);
  });
}
