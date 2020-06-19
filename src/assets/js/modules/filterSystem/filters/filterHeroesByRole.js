import refreshFilterArray from '../refreshFilterArray'

export default function filterHeroesByRole(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.roles.includes(value)); 
  refreshFilterArray(heroes);
  console.log('FILTERED THAT GOIN INSIDE HEROES', filteredArray);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
  console.log('ARRAY RETURNING FILTER BY ROLE', heroes);
  
}
