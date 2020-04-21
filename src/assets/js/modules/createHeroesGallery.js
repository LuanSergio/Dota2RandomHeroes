import { heroesList } from '../../../data/index'
import imgs from "../../img/heroes/*.png";

export function createHeroesGallery(){

  heroesList.forEach(elm => {
    const container = document.querySelector(`[data-group-ctn="${elm.group}"]`);
    
    container.innerHTML += `<div class="c-gallery__heroes" data-heroes-group="${elm.group}" data-heroes-faction="${elm.faction}"></div>`
    
    elm.heroes.forEach((hero) => {
      const name = hero.name;

      const heroes = document.querySelector(`[data-heroes-group="${elm.group}"][data-heroes-faction="${elm.faction}"]`);
      
      const imgName = 
      name.split(" ")
          .join("_")
          .split("'")
          .join("")
          .toLowerCase();
      
      const imgSrc = imgs[imgName];
      
      heroes.insertAdjacentHTML("beforeend", `<img src="${imgSrc}" class="c-gallery__heroes-img" alt="${hero.name}" title="${hero.name}"></img>`);
    })
  });
  
}