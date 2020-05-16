export function filterByCategory(heroes) {
  const filterInput = document.querySelector('[data-filter-heroes-input]');
  const filteredArray = [];

  filterInput.addEventListener('change', () => {
    if(filterInput.value) { 
      filteredArray.push(heroes.filter(hero => hero.roles.includes(filterInput.value))); 
    }
  });

  return filteredArray;
}
