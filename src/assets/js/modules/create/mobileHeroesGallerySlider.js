import changeSlide from '../slide/changeSlide'

export default function mobileHeroesGallery() {
  const width = screen.width;
  
  if(width < 767) {
    const container = document.querySelector('[data-heroes-gallery]');
    const galleryGroups = document.querySelectorAll('[data-group-ctn]');

    changeSlide(galleryGroups, 0);

    container.insertAdjacentHTML('afterbegin', 
    `<div class="c-gallery_slide-button-container">
      <button class="c-gallery_slide-button -previus" alt="Previus" data-button-gallery-previus>
        Previus
      /button>
      <button class="c-gallery_slide-button -next" alt="Next" data-button-gallery-next>
        Next
      </button>
    </div>`
    );

    const buttonNext = document.querySelector('[data-button-gallery-next]');
    const buttonPrevius = document.querySelector('[data-button-gallery-previus]');
    let index = 0;

    buttonPrevius.addEventListener('click', () => {
      index-=1;
      if(index < 0) {
        index = galleryGroups.length - 1;
      }
      changeSlide(galleryGroups, index);
    });
    
    buttonNext.addEventListener('click', () => {
      index+=1;
      if(index >= galleryGroups.length) {
        index = 0;
      }
      changeSlide(galleryGroups, index);
    });
  }
}