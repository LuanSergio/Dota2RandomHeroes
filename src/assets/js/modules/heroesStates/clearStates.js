import { states } from '../heroesStates/states'
import getHeroesArray from '../../utils/getHeroesArray'

export default function clearStates() {
  const heroes = getHeroesArray();
  heroes.forEach(hero => { 
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    heroName.classList.remove(states.excluded);
    heroName.classList.remove(states.notSelected);
    heroName.classList.remove(states.selected);
    heroName.dataset.selection = '';
  });
}
