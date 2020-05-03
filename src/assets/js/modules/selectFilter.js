import { rolesList } from '../../../data/index'

export function selectFilter() {
  const container = document.querySelector('[data-filter-heroes]');

  rolesList.roles.sort();
  
  rolesList.roles.forEach(role => {
    container.insertAdjacentHTML('beforeend', `<option value="${role}">`);
  });
}