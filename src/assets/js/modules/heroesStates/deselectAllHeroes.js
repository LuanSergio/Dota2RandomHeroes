export default function deselectAllHeroes({selected, excluded, notSelected}) {
  const heroes = document.querySelectorAll('[data-selection]');
  
  heroes.forEach( hero => {
    hero.classList.remove(selected);
    hero.classList.remove(excluded);
    hero.classList.add(notSelected);  
  });
}
