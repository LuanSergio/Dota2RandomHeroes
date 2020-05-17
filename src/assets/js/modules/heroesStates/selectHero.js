import { checkState } from './checkState'
import { deselectHeroes } from './deselectHeroes';

export function selectHero(hero, selected, excluded, notSelected) {
  hero.classList.toggle(selected);
  hero.classList.remove(excluded);
  hero.classList.remove(notSelected);
  checkState(hero, 'active');
  deselectHeroes();
}
