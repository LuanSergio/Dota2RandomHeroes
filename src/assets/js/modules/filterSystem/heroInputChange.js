import copyArrayElements from '../../utils/copyArrayElements'
import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByName from './filters/filterHeroesByName'

export default function roleInputChange(heroes, auxHeroes) {
  const heroInput = document.querySelector('[data-search-hero-input');

  heroInput.addEventListener('change', () => {
    if(heroInput.value) {
      copyArrayElements(auxHeroes, heroes);
      console.log('AUX', auxHeroes);
      console.log('heroes', heroes);
      
      filterHeroesByName(auxHeroes, heroInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
    }
  });
}
