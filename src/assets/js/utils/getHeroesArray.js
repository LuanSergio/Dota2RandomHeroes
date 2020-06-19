import { heroesList } from '../../../data/index';

export default function getHeroesArray(heroes = []) {

  heroesList.forEach(list => {
    list.heroes.forEach( hero => {
      heroes.push(hero);
    })
  });

  return heroes;
}
