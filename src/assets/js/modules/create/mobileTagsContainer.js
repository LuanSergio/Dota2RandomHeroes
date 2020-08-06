export default function mobileTagsContainer() {
  const container = document.querySelector('[data-random-ctn]');
  container.insertAdjacentHTML(
    'afterbegin',
    '<ul class="c-settings__tag h-hidden" data-tags-container></ul>'
  )
}
