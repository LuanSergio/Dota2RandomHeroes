import clearFilterArray from '../clearFilterArray'

export default function filterHeroesByRole(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.roles.includes(value)); 
  clearFilterArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
}
