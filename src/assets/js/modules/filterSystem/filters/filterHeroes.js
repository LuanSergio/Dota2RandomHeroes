import clearArray from '../../../utils/clearArray'
import showErrorMessage from '../showErrorMessage'
import returnFilterType from '../returnFilterType'
import clearErrorMessage from '../clearErrorMessage'

export default function filterHeroes(heroes, value) {
  const filterType = returnFilterType(value);

  const filteredArray = heroes.filter(hero => hero[filterType].includes(value)); 
  
  if(filteredArray.length !== 0) {
    clearErrorMessage();
    clearArray(heroes);
    filteredArray.forEach(hero => {
      heroes.push(hero);
    });
  } else {
    showErrorMessage('There is no hero with those conditions.');
  }
}
