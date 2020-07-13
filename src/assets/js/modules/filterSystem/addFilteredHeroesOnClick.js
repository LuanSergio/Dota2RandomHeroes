import printTag from '../tagSystem/printTag'
import showErrorMessage from './showErrorMessage'
import clearErrorMessage from './clearErrorMessage'
import filterHeroes from './filters/filterHeroes'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'

export default function addFilteredHeroesOnClick(heroes, filterTags) {
  const addButton = document.querySelector('[data-add-button]');

  addButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('[data-filter-input]');
    
    inputs.forEach(input => {
      if(input.value) {
        clearErrorMessage();
        if(filterTags.filter(tag => tag.value.includes(input.value)).length === 0) {
          filterTags.push({ value: input.value, status: '-add' });
        } else {
          showErrorMessage('You are already using this filter')
        }
        console.log('tags', filterTags);
        printTag(filterTags);
        filterHeroes(heroes, filterTags);
        addStateToFilteredHeroes(heroes);
      }
    });
  });
}
