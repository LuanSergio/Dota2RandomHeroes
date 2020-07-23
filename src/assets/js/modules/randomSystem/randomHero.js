import stringToImageName from '../../utils/stringToImageName';
import images from "../../../img/heroes/*.png";
import clearRandomContainer from './clearRandomContainer'
import copyArrayElements from '../../utils/copyArrayElements'

export default function randomHero(heroes) {
  const container = document.querySelector('[data-random-hero');
  const button = document.querySelector('[data-random-button');

  button.addEventListener('click', () => {
    clearRandomContainer();
    // container.classList.add('c-random_hero-ctn');
    const quantity = document.querySelector('[data-random-quantity-input]').value || 1;
    const auxHeroes = [];

    copyArrayElements(auxHeroes, heroes);

    for (let i = 0; i < quantity; i++) {
      const random = Math.round(Math.random() * (auxHeroes.length - 1));
      const hero = auxHeroes.splice(random, 1)[0];
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
