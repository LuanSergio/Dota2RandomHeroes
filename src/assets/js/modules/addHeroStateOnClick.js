import { selectHero } from './heroesStates/selectHero'
import { excludeHero } from './heroesStates/excludeHero'
import { states } from './heroesStates/states'

export function addHeroStateOnClick() {
  const heroes = document.querySelectorAll('[data-hero]');

  heroes.forEach(hero => {
    hero.addEventListener('click', () => { selectHero(hero, states) });
    hero.addEventListener('contextmenu', evt => { excludeHero(hero, evt, states) });
  });
}
