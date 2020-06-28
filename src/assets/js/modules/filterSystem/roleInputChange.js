import copyArrayElements from '../../utils/copyArrayElements'
import checkIfFilterIsValid from './checkIfFilterIsValid'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroesByRole from './filters/filterHeroesByRole'

export default function roleInputChange(heroes, auxHeroes) {
  const categoryInput = document.querySelector('[data-heroes-role-input]');

  categoryInput.addEventListener('change', () => {
    if(categoryInput.value) {
      copyArrayElements(auxHeroes, heroes);
      console.log('AUX', auxHeroes);
      console.log('heroes', heroes);
      
      filterHeroesByRole(auxHeroes, categoryInput.value);
      checkIfFilterIsValid(heroes, auxHeroes);
      addStateToFilteredHeroes(auxHeroes);
    }
  });
}
