import clearArray from '../../../utils/clearArray'
import getHeroesArray from '../../../utils/getHeroesArray'
import addToFiltersArray from './addToFiltersArray'
import removeFromFiltersArray from './removeFromFiltersArray'
import clearStates from '../../heroesStates/clearStates'
import addStateToFilteredHeroes from '../addStateToFilteredHeroes'
import showErrorMessage from '../errors/showErrorMessage'
import deselectAllHeroes from '../../heroesStates/deselectAllHeroes'

export default function filter(heroes, filterTags) {
  clearArray(heroes);
  getHeroesArray(heroes);
  
  filterTags.forEach(tag => {
    if(tag.status === '-add') {
      addToFiltersArray(heroes, tag)
    } else if(tag.status === '-remove') {
      removeFromFiltersArray(heroes, tag)
    }
  });

  if(filterTags.length === 0 ) {
    clearStates(heroes);
  } else if(heroes.length === 0) {
    deselectAllHeroes();
    showErrorMessage('Could not find any hero with that filters');
  }
  else {
    addStateToFilteredHeroes(heroes);
  }
  console.log('filtered', heroes);
}
