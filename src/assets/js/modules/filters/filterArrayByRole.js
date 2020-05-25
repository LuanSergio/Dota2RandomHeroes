export function filterArrayByRole(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.roles.includes(value)); 

  return filteredArray;
}
