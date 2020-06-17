import { states } from './states'

import selectHero from './selectHero'
import excludeHero from './excludeHero'

export default function addHeroStateOnClick() {
  const heroes = document.querySelectorAll('[data-hero]');

  heroes.forEach(hero => {
    hero.addEventListener('click', () => { selectHero(hero, states) });
    hero.addEventListener('contextmenu', evt => { excludeHero(hero, evt, states) });
  });
}
