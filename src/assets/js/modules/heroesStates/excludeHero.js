import checkState from './checkState'
import deselectHeroes from './deselectHeroes';

export default function excludeHero(hero, { selected, excluded }) {
  hero.classList.remove(selected);
  hero.classList.toggle(excluded);
  checkState(hero, 'excluded');
  deselectHeroes();
}
