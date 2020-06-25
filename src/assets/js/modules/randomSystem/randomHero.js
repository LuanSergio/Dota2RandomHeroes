import { heroesList } from '../../../../data/index';
import getHeroesArray from '../../utils/getHeroesArray'
import stringToImageName from '../../utils/stringToImageName';
import images from "../../../img/heroes/*.png";
import clearRandomContainer from './clearRandomContainer'

export default function randomHero() {
  const container = document.querySelector('[data-random-hero');
  const button = document.querySelector('[data-random-button');
  const heroesArray = getHeroesArray();
  
  button.addEventListener('click', () => {
    clearRandomContainer();
    container.classList.add('c-random_hero-ctn');
    const quantity = document.querySelector('[data-random-quantity-input]').value || 1;
     
    for (let i = 0; i < quantity; i++) {
      const random = Math.round(Math.random() * (heroesArray.length - 1));
      const hero = (heroesArray[random]);
      const imageName = stringToImageName(hero.name);

      container.insertAdjacentHTML(
      'beforeend', 
      `<div class="c-gallery__hero -randomized" data-randomized-hero="${hero.name}">
        <img 
          src="${images[imageName]}" 
          class="c-gallery__hero-img -randomized" 
          draggable="false"
          alt="${hero.name}" 
          title="${hero.name}">
        </img>
      </div>`
      )
    }
    })
}
