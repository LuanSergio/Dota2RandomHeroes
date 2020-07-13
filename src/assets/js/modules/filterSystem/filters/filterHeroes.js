import clearArray from '../../../utils/clearArray'
import returnFilterType from '../returnFilterType'
import getHeroesArray from '../../../utils/getHeroesArray'

export default function filterHeroes(heroes, filterTags) {

  if(heroes.length === 0) {
    clearArray(heroes);
    getHeroesArray(heroes);
  }

  filterTags.forEach(tag => {
    if(tag.status === '-add') {
      const filterType = returnFilterType(tag.value);

      if(filterType === 'roles') {
        const filteredArray = heroes.filter(hero => hero[filterType].includes(tag.value));
        clearArray(heroes);
  
        filteredArray.forEach(element => {
          heroes.push(element);
        });

      } else if (filterType === 'name') {
        const auxHeroes = [];
        getHeroesArray(auxHeroes);

        if(heroes.filter(hero => hero[filterType].includes(tag.value)).length === 0) {
          const filteredHero = auxHeroes.filter(hero => hero[filterType].includes(tag.value));
          heroes.push(filteredHero[0]);
        } else if(heroes.length === auxHeroes.length) {
          clearArray(heroes);
          const filteredHero = auxHeroes.filter(hero => hero[filterType].includes(tag.value));
          heroes.push(filteredHero[0]);
        }

      }
    }
  });
  
}
