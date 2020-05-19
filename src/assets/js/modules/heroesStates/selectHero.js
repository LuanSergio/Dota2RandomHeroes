import { checkState } from './checkState'
import { deselectHeroes } from './deselectHeroes';

export function selectHero(hero, { selected, excluded, notSelected }) {
  hero.classList.remove(excluded);
  hero.classList.remove(notSelected);
  hero.classList.toggle(selected);
  checkState(hero, 'active');
  deselectHeroes();
}
