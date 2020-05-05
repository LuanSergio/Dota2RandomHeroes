import { deselectHeroes } from './deselectHeroes';

export function heroClick() {
  const heroes = document.querySelectorAll('[data-hero]');
  const states = {
    selected: '-selected',
    excluded: '-excluded',
    notSelected: '-notSelected'
  }

  const checkState = (hero, state) => {
    if((hero.getAttribute('data-selection')) === state){
      hero.dataset.selection = '';
    }else {
      hero.dataset.selection = state;
    }
  }

  heroes.forEach(hero => {
    hero.addEventListener('click', () => {
      hero.classList.toggle(states.selected);
      hero.classList.remove(states.excluded);
      hero.classList.remove(states.notSelected);
      checkState(hero, 'active');
      deselectHeroes();
    })

    hero.addEventListener('contextmenu', evt => {
      evt.preventDefault();
      hero.classList.remove(states.selected);
      hero.classList.toggle(states.excluded);
      checkState(hero, 'excluded');
      deselectHeroes();
    });
  });
}
