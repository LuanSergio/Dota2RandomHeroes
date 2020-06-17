export default function preventContextMenu() {
  const list = [ 
   document.querySelector('[data-heroes-gallery]'),
   document.querySelector('[data-random-hero]'),
  ]
  
  list.forEach(item => {
    item.addEventListener('contextmenu', evt => {
      evt.preventDefault();
    })
  });
}
