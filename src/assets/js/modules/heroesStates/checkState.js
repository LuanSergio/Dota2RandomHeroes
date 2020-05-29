export default function checkState(hero, state) {
  if((hero.getAttribute('data-selection')) === state){
    hero.dataset.selection = '';
  }else {
    hero.dataset.selection = state;
  }
}
