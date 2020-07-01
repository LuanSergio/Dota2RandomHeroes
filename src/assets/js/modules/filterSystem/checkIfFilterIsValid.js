export default function checkIfFilterIsValid(heroes, filterType, value) {
  const checkIfValueIsValid = heroes.filter(hero => hero[filterType].includes(value)).length !== 0;
  
  if(checkIfValueIsValid) {
    return true;
  } else {
    return false;
  }
}