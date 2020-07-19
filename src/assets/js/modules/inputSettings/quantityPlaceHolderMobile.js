export default function quantityPlaceHolderMobile() {
  const width = screen.width;
  const quantity = document.querySelector('[data-random-quantity-input]');

  if(width < 767) {
    quantity.placeholder = "Random Quantity";
  }
}