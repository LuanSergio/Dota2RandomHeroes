export default function removeHeroesByRole(heroes, auxHeroes) {
  heroes = heroes.filter(hero => !auxHeroes.includes(hero));
  console.log(heroes);
  return heroes
  // array1 = array1.filter(val => !array2.includes(val));
}
