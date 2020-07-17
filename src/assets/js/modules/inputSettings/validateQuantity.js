export default function validateQuantity(heroes) {
  const quantity = document.querySelector('[data-random-quantity-input]');
  
  quantity.addEventListener('change', () => {
    const heroesLength = heroes.map(hero => hero.name).length;

    quantity.max = heroesLength;
    if (quantity.value < 1) quantity.value = 1;
    if (quantity.value > heroesLength) quantity.value = heroesLength;
  })
}
