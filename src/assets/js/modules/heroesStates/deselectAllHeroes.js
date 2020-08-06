import { states } from './states'

export default function deselectAllHeroes() {
  const heroes = document.querySelectorAll('[data-selection]');
  
  heroes.forEach( hero => {
    hero.classList.remove(states.selected);
    hero.classList.remove(states.excluded);
    hero.classList.add(states.notSelected);  
  });
}
