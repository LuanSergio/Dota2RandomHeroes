import { states } from '../heroesStates/states'
import clearStates from '../heroesStates/clearStates'
import selectHero from '../heroesStates/selectHero'

export default function addStateToFilteredHeroes(auxHeroes) {
  if(auxHeroes.length !== 0) {
    clearStates(states);
  }
  auxHeroes.forEach(hero => {
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    selectHero(heroName, states);
  });
}
