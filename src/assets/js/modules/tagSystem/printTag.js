export default function printTag(filterTags) {
  const container = document.querySelector('[data-tags-container]');
  if(filterTags) {
    container.classList.remove('h-hidden');
  } else {
    container.classList.add('h-hidden');
  }
  container.innerHTML = '';
  filterTags.forEach((tag) => {
    container.insertAdjacentHTML(
      'beforeend', 
      `<li class="c-settings__tag-item">
        <button class="c-settings__tag-icon" data-tags-items-remove="${tag.role}"></button>
        <span class="c-settings__tag-text">${tag.role}</span>
      </li>`
    );
  });
}
