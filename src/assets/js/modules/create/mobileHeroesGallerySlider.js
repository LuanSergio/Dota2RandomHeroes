import changeSlide from '../slide/changeSlide'

export default function mobileHeroesGallery() {
  const width = screen.width;
  
  if(width < 767) {
    const groupContainer = document.querySelectorAll('[data-group-container]');
    const groups = document.querySelectorAll('[data-group]');

    changeSlide(groupContainer, 0);

    groups.forEach(group => {
      group.insertAdjacentHTML('afterbegin', 
      `<div class="c-gallery_slide-button-container">
        <button class="c-gallery_slide-button -previus" alt="Previus" data-button-gallery-previus>
          Previus
        /button>
        <button class="c-gallery_slide-button -next" alt="Next" data-button-gallery-next>
          Next
        </button>
      </div>`
      );
    });
    
    const buttonNext = document.querySelectorAll('[data-button-gallery-next]');
    const buttonPrevius = document.querySelectorAll('[data-button-gallery-previus]');
    let index = 0;

    buttonPrevius.forEach(button => {
      button.addEventListener('click', () => {
        index-=1;
        if(index < 0) {
          index = groupContainer.length - 1;
        }
        changeSlide(groupContainer, index);
      });
    });
    
    buttonNext.forEach(button => {
      button.addEventListener('click', () => {
        index+=1;
        if(index >= groupContainer.length) {
          index = 0;
        }
        changeSlide(groupContainer, index);
      });
    });
  }
}