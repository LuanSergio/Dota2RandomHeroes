import clearArray from '../../../utils/clearArray'
import showErrorMessage from '../showErrorMessage'
export default function filterHeroes(heroes, filterType, value) {

  const filteredArray = heroes.filter(hero => hero[filterType].includes(value)); 
  
  if(filteredArray.length !== 0) {
    clearArray(heroes);
    filteredArray.forEach(hero => {
      heroes.push(hero);
    });
  } else {
    showErrorMessage('There is no hero with those conditions.');
  }
}
