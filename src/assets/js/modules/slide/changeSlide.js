import hideNodes from '../../utils/hideNodes'

export default function changeSlide(slideItems, currentIndex) {
  hideNodes(slideItems);
  slideItems[currentIndex].classList.remove('h-mobile-off'); 
}
