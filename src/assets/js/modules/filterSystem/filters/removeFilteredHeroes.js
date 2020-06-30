import clearArray from '../../../utils/clearArray'

export default function removeFilteredHeroes(heroes, filterType, value) {
  
  
  const filteredArray = heroes.filter(hero => !hero[filterType].includes(value)); 
  clearArray(heroes);

  filteredArray.forEach(role => {
    heroes.push(role);
  });

  console.log('removed', heroes);
  
}
