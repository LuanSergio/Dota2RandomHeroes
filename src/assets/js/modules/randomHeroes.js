import { heroesList } from '../../../data/index'
import imgs from "../../img/heroes/*.png";

export function randomHeroes() {
  const container = document.querySelector('[data-random');
  const button = document.querySelector('[data-random-button');
  console.log(button);
  
  button.addEventListener('click', () => {
    const random = () => Math.round(Math.random() * 100);
    console.log(random);
    
    // container.appendChild(); 
  })
}