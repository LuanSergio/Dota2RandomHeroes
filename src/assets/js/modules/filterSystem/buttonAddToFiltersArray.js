import addTag from '../tagSystem/addTag'
import filterHeroesArray from './filters/filterHeroesArray'
import returnFilterType from './returnFilterType'
import showErrorMessage from './errors/showErrorMessage'

export default function buttonAddToFiltersArray(heroes, filterTags) {
  const addButton = document.querySelector('[data-add-button]');

  addButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('[data-filter-input]');
    
    inputs.forEach(input => {
      if(input.value) {
        if(returnFilterType(input.value)) {
          addTag(heroes, filterTags, input.value, '-add');
          console.log('tags', filterTags);
          filterHeroesArray(heroes, filterTags);
        } else {
          showErrorMessage('This is not a valid filter')
        }
      }
    });
  });
}
