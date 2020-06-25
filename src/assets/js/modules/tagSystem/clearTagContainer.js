export default function clearTagContainer() {
  const tagContainer = document.querySelector('[data-tags-container]');
  tagContainer.classList.add('h-hidden');
  tagContainer.innerHTML = '';
}
