import { heroesList } from '../../../../data/index'
import { getHeroesArray } from '../getHeroesArray'

export default function clearStates({ selected, excluded, notSelected }) {
  const heroes = getHeroesArray(heroesList);
  heroes.forEach(hero => { 
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    heroName.classList.remove(excluded);
    heroName.classList.remove(notSelected);
    heroName.classList.remove(selected);
    heroName.dataset.selection = '';
  });
}
