import copyArrayElements from '../../utils/copyArrayElements'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
// import filterHeroes from './filters/filterHeroes'

export default function inputChangeFilter(heroes, auxHeroes) {
  const inputs = document.querySelectorAll('[data-filter-input]');

  // inputs.forEach(input => {
  //   input.addEventListener('change', () => {
  //     if(input.value) {
  //       copyArrayElements(auxHeroes, heroes);
  //       filterHeroes(auxHeroes, input.value);
  //       if(checkIfFilterIsValid(heroes, input.value)) {
  //         addStateToFilteredHeroes(auxHeroes);
  //       }
  //     }
  //   });
  // });
}
