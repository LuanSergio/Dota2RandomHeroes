import clearArray from '../../../utils/clearArray'

export default function filterHeroesByRole(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.roles.includes(value)); 
  clearArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
}
