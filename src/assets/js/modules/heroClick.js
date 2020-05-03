import { deselectHeroes } from './deselectHeroes';

export function heroClick() {
  const heroes = document.querySelectorAll('[data-hero]');
  const states = {
    selected: '-selected',
    excluded: '-excluded'
  }
  heroes.forEach(hero => {

    hero.addEventListener('click', () => {
      hero.classList.toggle(states.selected);
      hero.classList.remove(states.excluded);
      
      if((hero.getAttribute('data-selection')) === 'active'){
        hero.dataset.selection = '';
      }else {
        hero.dataset.selection = 'active';
      }
      deselectHeroes();
    })

    hero.addEventListener('contextmenu', evt => {
      evt.preventDefault();
      hero.classList.remove(states.selected);
      hero.classList.toggle(states.excluded);
      hero.dataset.selection = 'excluded';
    });
  });
}
