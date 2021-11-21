import changeSlide from "../slide/changeSlide";

export default function mobileHeroesGallery() {
  const groupContainer = document.querySelectorAll("[data-group-container]");
  const groups = document.querySelectorAll("[data-group]");

  changeSlide(groupContainer, 0);

  groups.forEach((group) => {
    group.insertAdjacentHTML(
      "afterbegin",
      `<div class="c-gallery_slide-button-container">
      <button class="c-gallery_slide-button -previous" alt="Previous" data-button-gallery-previous>
        Previous
      /button>
      <button class="c-gallery_slide-button -next" alt="Next" data-button-gallery-next>
        Next
      </button>
    </div>`
    );
  });

  const buttonNext = document.querySelectorAll("[data-button-gallery-next]");
  const buttonPrevious = document.querySelectorAll(
    "[data-button-gallery-previous]"
  );
  let index = 0;

  buttonPrevious.forEach((button) => {
    button.addEventListener("click", () => {
      index -= 1;
      if (index < 0) {
        index = groupContainer.length - 1;
      }
      changeSlide(groupContainer, index);
    });
  });

  buttonNext.forEach((button) => {
    button.addEventListener("click", () => {
      index += 1;
      if (index >= groupContainer.length) {
        index = 0;
      }
      changeSlide(groupContainer, index);
    });
  });
}
