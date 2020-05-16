export function getHeroesArray(heroesList) {
  const heroes = [];
  
  heroesList.forEach(list => {
    list.heroes.forEach( hero => {
      heroes.push(hero);
    })
  });

  return heroes;
}