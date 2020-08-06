import { heroesList } from './getData';

export default function getHeroesArray(heroes = []) {

  heroesList.forEach(list => {
    list.heroes.forEach( hero => {
      heroes.push(hero);
    })
  });

  return heroes;
}
