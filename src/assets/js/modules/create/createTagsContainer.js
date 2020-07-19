export default function createTagsContainer() {
  const width = screen.width;

  if(width > 767) {
    const container = document.querySelector('[data-random-settings]');
    container.insertAdjacentHTML(
      'afterbegin',
      '<ul class="c-settings__tag h-hidden" data-tags-container></ul>'
    )
  } else {
    const container = document.querySelector('[data-random-ctn]');
    container.insertAdjacentHTML(
      'afterbegin',
      '<ul class="c-settings__tag h-hidden" data-tags-container></ul>'
    )
  }
}