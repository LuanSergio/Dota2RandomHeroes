import returnFilterType from './returnFilterType'

export default function checkIfFilterIsValid(heroes, value) {
  const filterType = returnFilterType(value);
  const checkIfValueIsValid = heroes.filter(hero => hero[filterType].includes(value)).length !== 0;
  
  if(checkIfValueIsValid) {
    return true;
  } else {
    return false;
  }
}