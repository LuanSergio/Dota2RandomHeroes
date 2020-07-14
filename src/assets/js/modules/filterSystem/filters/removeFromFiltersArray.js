import returnFilterType from '../returnFilterType'
import clearArray from '../../../utils/clearArray'

export default function removeFromFiltersArray(heroes, tag) {
  const filterType = returnFilterType(tag.value);

  if(filterType === 'roles') {
    const filteredArray = heroes.filter(hero => !hero[filterType].includes(tag.value));
    clearArray(heroes);

    filteredArray.forEach(element => {
      heroes.push(element);
    });

  } else if (filterType === 'name') {
    const filteredArray = heroes.filter(hero => !hero[filterType].includes(tag.value));
    clearArray(heroes);

    filteredArray.forEach(hero => {
      heroes.push(hero);
    });
  }
}
