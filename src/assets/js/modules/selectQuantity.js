import { heroesList } from '../../../data/index'

export function selectQuantity() {
  const quantity = document.querySelector('[data-random-quantity-input]');
  const heroesName= [];

  heroesList.forEach(list => {
    list.heroes.forEach(hero => {
      heroesName.push(hero.name);
    })
  })

  quantity.max = heroesName.length;

  quantity.addEventListener('change', () => {
    if (quantity.value < 1) quantity.value = 0;
    if (quantity.value > heroesName.length) quantity.value = heroesName.length;
  })
}
