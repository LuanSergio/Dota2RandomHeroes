export default function removeTag(filterTags) {
  const removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
  
  function removeRoleFromArray(filterTags, role) {
    filterTags.splice(filterTags.findIndex(tag => tag.role === `${role}`), 1);
  }

  removeTagButton.forEach( (button) => {
    button.addEventListener('click', (event) => {
      removeRoleFromArray(filterTags, event.target.getAttribute("data-tags-items-remove"));
      /*
        foreach
        heroes = filterHeroesByRole(auxHeroes, role);
      */
      event.target.parentNode.remove();
    });
    
  });
}
