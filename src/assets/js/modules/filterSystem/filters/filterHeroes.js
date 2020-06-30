import clearArray from '../../../utils/clearArray'

export default function filterHeroes(heroes, filterType, value) {

  const filteredArray = heroes.filter(hero => hero[filterType].includes(value)); 
  clearArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });
}
