export function filterByCategory(heroes, input) {
  const filteredArray = [];
  const value = input.value
  
  if(value) { 
    filteredArray.push(heroes.filter(hero => hero.roles.includes(value))); 
  }

  return filteredArray;
}
