import copyArrayElements from '../../utils/copyArrayElements'
import checkIfFilterHasHeroes from './checkIfFilterHasHeroes'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import filterHeroes from './filters/filterHeroes'

export default function inputChangeFilter(heroes, auxHeroes) {
  const inputs = document.querySelectorAll('[data-filter-input]');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      if(input.value) {
        const filterType = input.getAttribute('data-filter-input');
        copyArrayElements(auxHeroes, heroes);
        filterHeroes(auxHeroes, filterType, input.value);
        checkIfFilterHasHeroes(heroes);
        addStateToFilteredHeroes(auxHeroes);
      }
    });
  });
}
