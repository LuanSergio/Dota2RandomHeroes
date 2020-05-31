export default function removeHeroesByRole(heroes, auxHeroes) {
  heroes = heroes.filter(hero => !auxHeroes.includes(hero));
  return heroes
}
