import getHeroesArray from '../../utils/getHeroesArray'

export default function createHerosOptions() {
  const container = document.querySelector('[data-search-hero-list]');
  const heroesName = getHeroesArray().map( hero => hero.name).sort();

  heroesName.forEach((hero) => {
    container.insertAdjacentHTML('beforeend', `<option value="${hero}">`);
  });
}
