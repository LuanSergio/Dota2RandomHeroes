import hideNodes from '../../utils/hideNodes'

export default function changeSlide(slideItems, currentIndex) {
  hideNodes(slideItems);
  console.log(slideItems, currentIndex);
  slideItems[currentIndex].classList.remove('h-mobile-off'); 
}
