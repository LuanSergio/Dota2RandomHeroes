export function filterArrayByCategory(heroes, value) {
  const filteredArray = heroes.filter(hero => hero.roles.includes(value)); 

  return filteredArray;
}
