import { heroesList } from '../../../../data/index'
import { getHeroesArray } from '../getHeroesArray'
import { states } from '../heroesStates/states'

export default function clearStates() {
  const heroes = getHeroesArray(heroesList);
  heroes.forEach(hero => { 
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    heroName.classList.remove(states.excluded);
    heroName.classList.remove(states.notSelected);
    heroName.classList.remove(states.selected);
    heroName.dataset.selection = '';
  });
}
