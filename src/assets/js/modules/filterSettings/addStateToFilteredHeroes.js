import { states } from '../heroesStates/states'
import selectHero from '../heroesStates/selectHero'

export default function addStateToFilteredHeroes(auxHeroes) {
  auxHeroes.forEach(hero => {
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    selectHero(heroName, states);
  });
}
