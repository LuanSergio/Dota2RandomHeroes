import getHeroesArray from '../../utils/getHeroesArray'
import { rolesList } from '../../../../data/index'

export default function returnFilterType(value) {
  const heroesName = getHeroesArray().map( hero => hero.name).sort();
  
  if(heroesName.includes(value)) {
    return 'name';
  } else if(Object.values(rolesList)[0].includes(value)) {
    return 'roles';
  } else {
    return false;
  }
}