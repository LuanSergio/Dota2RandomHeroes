import { heroesList } from '../../../data/index'

export function searchHeroes() {
  const heroesName= [];

  const container = document.querySelector('[data-search-hero]');
  
  heroesList.forEach(elm => {
    elm.heroes.forEach(hero => {
      heroesName.push(hero.name);
    })
  })

  heroesName.sort();

  heroesName.forEach((hero) => {
    container.insertAdjacentHTML('beforeend', `<option>${hero}</option>`)
  })
  
}