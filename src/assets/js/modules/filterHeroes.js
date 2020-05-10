import { heroesList } from '../../../data/index'

export function filterHeroes() {
  const filterInput = document.querySelector('[data-filter-heroes-input]');
  let heroes = [];
  let filteredArray = [];

  heroesList.forEach(list => {
    heroes.push(list.heroes);
  });
  
  if(filterInput.value){
    filteredArray = heroes.filter(hero => {
      return hero.roles.includes();
    })
  }
}
