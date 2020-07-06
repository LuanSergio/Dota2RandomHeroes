import clearArray from '../../../utils/clearArray'
import showErrorMessage from '../showErrorMessage'
import returnFilterType from '../returnFilterType'
import clearErrorMessage from '../clearErrorMessage'
import getHeroesArray from '../../../utils/getHeroesArray'

export default function filterHeroes(heroes, value) {
  const filterType = returnFilterType(value);

  if(heroes.length === 0) {
    clearArray(heroes);
    getHeroesArray(heroes);
  }
  console.log(filterType);
  
  const filteredArray = heroes.filter(hero => hero[filterType].includes(value)); 
  
  if(filteredArray.length !== 0) {
    clearErrorMessage();
    clearArray(heroes);
    filteredArray.forEach(hero => {
      heroes.push(hero);
    });
  } else if (filterType === 'name') {
    console.log('foi true');
    const auxHeroes = [];
    getHeroesArray(auxHeroes);
    const filteredArray = auxHeroes.filter(hero => hero[filterType].includes(value)); 
    console.log('arrayzito', filteredArray);
    
    filteredArray.forEach(hero => {
      heroes.push(hero);
    });
  } else {
    showErrorMessage('There is no hero with those conditions.');
  }

  console.log(heroes);
  
}
