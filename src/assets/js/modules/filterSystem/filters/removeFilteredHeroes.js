import clearArray from '../../../utils/clearArray'
import returnFilterType from '../returnFilterType'

export default function removeFilteredHeroes(heroes, value) {
  const filterType = returnFilterType(value);
  
  
  const filteredArray = heroes.filter(hero => !hero[filterType].includes(value)); 
  clearArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });

  console.log('removed', heroes);
  
}
