import removeFilteredHeroes  from './filters/removeFilteredHeroes'
import addStateToFilteredHeroes from './addStateToFilteredHeroes'
import addTag from '../tagSystem/addTag'
import printTag from '../tagSystem/printTag'
import removeTag from '../tagSystem/removeTag'
import clearTextInputs from '../inputSettings/clearTextInputs'

export default function removeFilteredHeroesOnClick(heroes, auxHeroes, filterTags) {
  const removeButton = document.querySelector('[data-remove-button]');

  removeButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('[data-filter-input]');
    
    if(auxHeroes.lenght !== 0) {
      inputs.forEach(input => {
        if(input.value) {
          // removeFilteredHeroes(heroes, input.value);
          // addStateToFilteredHeroes(heroes);
          // addTag(filterTags, input.value, '-remove');
          // printTag(filterTags);
          // removeTag(heroes, filterTags);
          // clearTextInputs();

          filterTags.push({ value: input.value, status: '-remove' });
          console.log('tags', filterTags);
          printTag(filterTags);
          
        }
      });
    }
  });
}
