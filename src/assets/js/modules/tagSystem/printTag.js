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
      `<li class="c-settings__tag-item ${tag.status}" data-tags-items-remove="${tag.value}">
        <span class="c-settings__tag-text">${tag.value}</span>
      </li>`
    );
  });
}
