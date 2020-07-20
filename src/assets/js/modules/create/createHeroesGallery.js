import { heroesList } from '../../../../data/index'
import images from "../../../img/heroes/*.webp";
import stringToImageName from '../../utils/stringToImageName';

export default function createHeroesGallery() {

  heroesList.forEach(list => {
    const container = document.querySelector(`[data-group="${list.group}"]`);
    
    container.insertAdjacentHTML(
      'beforeend', 
      `<div 
        class="c-gallery__heroes" 
        data-heroes-group="${list.group}" 
        data-heroes-faction="${list.faction}">
      </div>`
    );
    
    list.heroes.forEach((hero) => {
      const name = hero.name;

      const heroes = document.querySelector(
        `[data-heroes-group="${list.group}"][data-heroes-faction="${list.faction}"]`
      );
      
      const imageName = stringToImageName(name);
      
      const imageSource = images[imageName];
      
      heroes.insertAdjacentHTML(
        'beforeend', 
        `<div 
          class="c-gallery__hero" 
          data-hero="${hero.name}"
          data-selection="">
            <img 
              src="${imageSource}" 
              class="c-gallery__hero-img" 
              draggable="false"
              alt="${hero.name}" 
              title="${hero.name}">
            </img>
        </div>`
      );
    });
  });
}
