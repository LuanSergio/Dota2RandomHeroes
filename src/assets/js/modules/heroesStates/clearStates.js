import { states } from '../heroesStates/states'
import getHeroesArray from '../../utils/getHeroesArray'

export default function clearStates() {
  const heroes = getHeroesArray();
  heroes.forEach(hero => { 
    const heroNode = document.querySelector(`[data-hero="${hero.name}"]`);
    heroNode.classList.remove(states.excluded);
    heroNode.classList.remove(states.notSelected);
    heroNode.classList.remove(states.selected);
    heroNode.dataset.selection = '';
  });
}
