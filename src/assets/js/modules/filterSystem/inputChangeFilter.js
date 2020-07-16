import copyArrayElements from '../../utils/copyArrayElements'
import filterHeroesArray from './filters/filterHeroesArray'

export default function inputChangeFilter(heroes, filterTags) {
  const inputs = document.querySelectorAll('[data-filter-input]');


  inputs.forEach(input => {
    input.addEventListener('change', () => {
      const auxFilters = [];
      copyArrayElements(auxFilters, filterTags);
      auxFilters.push({value: input.value, status: '-add'});
      filterHeroesArray(heroes, auxFilters);
    });
  });
}
