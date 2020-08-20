import copyArrayElements from '../../utils/copyArrayElements'
import filterHeroesArray from './filters/filterHeroesArray'
import returnFilterType from './returnFilterType'
import showErrorMessage from './errors/showErrorMessage'

export default function inputChangeFilter(heroes, filterTags) {
  const inputs = document.querySelectorAll('[data-filter-input]');


  inputs.forEach(input => {
    input.addEventListener('change', () => {
      if(returnFilterType(input.value)) {
        const auxFilters = [];
        copyArrayElements(auxFilters, filterTags);
        auxFilters.push({value: input.value, status: '-add'});
        filterHeroesArray(heroes, auxFilters);

      } else {
        showErrorMessage('This is not a valid filter');
      }
    });
  });
}
