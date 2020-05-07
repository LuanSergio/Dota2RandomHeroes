import { heroesList } from '../../../data/index';
import { heroNameToImageName } from '../utils/heroNameToImageName';
import images from "../../img/heroes/*.png";

export function randomHero() {
  const container = document.querySelector('[data-random-hero');
  const button = document.querySelector('[data-random-button');
  const heroesArray = [];
  
  heroesList.forEach(list => {
    list.heroes.forEach(hero => {
      heroesArray.push(hero);
    });
  })
  
  button.addEventListener('click', () => {
    container.classList.add('c-random_hero-ctn');
    container.innerHTML = '';
    const quantity = document.querySelector('[data-random-quantity-input]').value;
    console.log(typeof quantity);
    
    for (let i = 0; i < quantity; i++) {
      const random = Math.round(Math.random() * (heroesArray.length - 1));
      const hero = (heroesArray[random]);
      const imageName = heroNameToImageName(hero.name);

      container.insertAdjacentHTML(
      'beforeend', 
      `<div class="c-gallery__hero" data-hero="${hero.name}">
        <img 
          src="${images[imageName]}" 
          class="c-gallery__hero-img" 
          draggable="false"
          alt="${hero.name}" 
          title="${hero.name}">
        </img>
      </div>`
      )
    }
    })
}