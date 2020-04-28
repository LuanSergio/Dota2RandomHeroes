import { heroesList } from '../../../data/index'
import images from "../../img/heroes/*.png";

export function createHeroesGallery() {

  heroesList.forEach(list => {
    const container = document.querySelector(`[data-group-ctn="${list.group}"]`);
    
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
      
      const imageName = 
      name.split(" ")
          .join("_")
          .split("'")
          .join("")
          .toLowerCase();
      
      const imageSrc = images[imageName];
      
      heroes.insertAdjacentHTML(
        'beforeend', 
        `<img 
          src="${imageSrc}" 
          class="c-gallery__heroes-img" 
          alt="${hero.name}" 
          title="${hero.name}" 
          data-hero="${hero.name}"
          data-selection="">
        </img>`
      );
    });
  });
}
