import refreshFilterArray from '../refreshFilterArray'

export default function filterHeroesByRole(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.roles.includes(value)); 
  refreshFilterArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
  console.log('returning array', heroes);
  
}
