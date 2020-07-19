import { states } from '../heroesStates/states'
import clearStates from '../heroesStates/clearStates'
import selectHero from '../heroesStates/selectHero'
import excludeHero from '../heroesStates/excludeHero'
import returnFilterType from './returnFilterType'

export default function addStateToFilteredHeroes(heroes, filterTags) {
  clearStates(states);

  heroes.forEach(hero => {
    const heroNode = document.querySelector(`[data-hero="${hero.name}"]`);
    selectHero(heroNode, states);
  });

  filterTags.forEach(tag => {
    if(returnFilterType(tag.value) === 'name') {
      if(tag.status === '-remove') {
        const heroNode = document.querySelector(`[data-hero="${tag.value}"]`);
        excludeHero(heroNode, states);
      }
    }
  })
}
