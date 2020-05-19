export function clearStates(heroes, { selected, excluded, notSelected }) {
  heroes.forEach(hero => {
    const heroName = document.querySelector(`[data-hero="${hero.name}"]`);
    heroName.classList.remove(excluded);
    heroName.classList.remove(notSelected);
    heroName.classList.remove(selected);
    heroName.dataset.selection = '';
  });
}
