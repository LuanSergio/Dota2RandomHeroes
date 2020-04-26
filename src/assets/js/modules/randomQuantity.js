import { heroesList } from '../../../data/index'

export function randomQuantity() {
  const container = document.querySelector('[data-random-quantity]');
  let index = 0;
  heroesList.forEach(list => {
    list.heroes.forEach( hero => {
      index++;
      container.insertAdjacentHTML('beforeend', `<option value="${index}">`);

      // if(index < list.heroes.length) {
      //   container.insertAdjacentHTML('beforeend', `<option value="${index}">`);
      // }
    })
  })
}