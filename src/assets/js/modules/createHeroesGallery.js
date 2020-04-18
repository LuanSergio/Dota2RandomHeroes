import { heroesList } from '../../../data/index'
import imgs from "../../img/heroes/*.png";

export function createHeroesGallery(){
  const ctn = document.querySelector('[data-heroes-gallery]');
  let i = 0;
  
  heroesList.forEach(elm => {
    ctn.innerHTML += `<div class="c-heroes" data-heroes-container="${elm.id}"></div>`
    const heroes = document.querySelectorAll('[data-heroes-container]');
    
    elm.heroes.forEach((elm) => {
      const name = elm.name;
      const imgName = 
      name.split(" ")
      .join("_")
      .split("'")
      .join("")
      .toLowerCase();
      
      const imgSrc = imgs[imgName];
      
      heroes[i].insertAdjacentHTML("beforeend", `<img src="${imgSrc}" class="c-heroes__img" alt="${elm.name}" title="${elm.name}"></img>`  );
    })
    i++;
  });
  
}