export default function createTagsContainer() {
  const container = document.querySelector('[data-random-settings]');
  container.insertAdjacentHTML(
    'afterbegin',
    '<ul class="c-settings__tag h-hidden" data-tags-container></ul>'
  )
}
