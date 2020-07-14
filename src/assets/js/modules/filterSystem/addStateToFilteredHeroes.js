import { states } from '../heroesStates/states'
import clearStates from '../heroesStates/clearStates'
import selectHero from '../heroesStates/selectHero'

export default function addStateToFilteredHeroes(heroes) {
  clearStates(states);

  heroes.forEach(hero => {
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    selectHero(heroName, states);
  });
}
