export default function addHeroToFilterOnClick(heroes, value) {
  const auxHeroes = heroes.filter( hero => hero.name === value);
  console.log('auxClick', auxHeroes);
  
  //if exist don't push
  // 
  //
  console.log();
  
  if(heroes.filter(hero => hero.name.includes(auxHeroes[0].name)).length === 0) {
    heroes.push(auxHeroes);
  }

}