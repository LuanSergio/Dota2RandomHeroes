import clearArray from '../../../utils/clearArray'

export default function filterHeroesByName(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.name.includes(value)); 
  clearArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
}
