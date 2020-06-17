import { heroesList } from '../../../data/index';

export default function getHeroesArray() {
  const heroes = [];
  
  heroesList.forEach(list => {
    list.heroes.forEach( hero => {
      heroes.push(hero);
    })
  });

  return heroes;
}
