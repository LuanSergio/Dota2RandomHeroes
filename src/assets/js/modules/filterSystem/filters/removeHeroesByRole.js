import clearFilterArray from '../clearFilterArray'
export default function removeHeroesByRole(heroes, value) {
  const filteredArray = heroes.filter(hero => !hero.roles.includes(value)); 
  clearFilterArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
}
