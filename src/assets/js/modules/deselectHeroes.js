export function deselectHeroes() {
  const heroes = document.querySelectorAll('[data-selection=""]');
  const active = document.querySelector('[data-selection="active"]');

  if(active) {
    heroes.forEach( hero => {
      hero.classList.add('-notSelected');
    });
  } else {
    heroes.forEach( hero => {
      hero.classList.remove('-notSelected')
    });
  }
}