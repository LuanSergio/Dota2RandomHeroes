import { heroesList } from '../../../data/index';

export function getHeroesArray() {
  const heroes = [];
  
  heroesList.forEach(list => {
    list.heroes.forEach( hero => {
      heroes.push(hero);
    })
  });

  return heroes;
}