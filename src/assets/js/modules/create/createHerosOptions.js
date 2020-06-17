import { heroesList } from '../../../../data/index'
import getHeroesArray from '../../utils/getHeroesArray'

export default function createHerosOptions() {
  const container = document.querySelector('[data-search-hero-list]');
  const heroesName = getHeroesArray(heroesList).map( hero => hero.name).sort();

  heroesName.forEach((hero) => {
    container.insertAdjacentHTML('beforeend', `<option value="${hero}">`);
  });
}
