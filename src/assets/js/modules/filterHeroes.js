import { heroesList } from '../../../data/index'

export function filterHeroes() {
  var heroes;
  heroesList.forEach(list => {

    heroes = heroesList.map(() =>{
     return list.heroes;
      
   })
  });

  console.log(heroes);
  
}
