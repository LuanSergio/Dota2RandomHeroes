import { heroesList } from '../../../data/index';
import { heroNameToImageName } from '../utils/heroNameToImageName';
import images from "../../img/heroes/*.png";

export function randomHero() {
  const container = document.querySelector('[data-random-hero');
  const button = document.querySelector('[data-random-button');
  const heroesArray = [];
  console.log(images.earthshaker);
  
  heroesList.forEach(list => {
    list.heroes.forEach(hero => {
      heroesArray.push(hero);
    });
  })
  
  button.addEventListener('click', () => {
    const random = Math.round(Math.random() * (heroesArray.length - 1));
    const hero = (heroesArray[random]);
    
    const imageName = heroNameToImageName(hero.name);
    
    container.innerHTML= 
    `<div class="c-gallery__hero" data-hero="${hero.name}">
      <img 
        src="${images[imageName]}" 
        class="c-gallery__hero-img" 
        draggable="false"
        alt="${hero.name}" 
        title="${hero.name}">
      </img>
    </div>`
    })
}