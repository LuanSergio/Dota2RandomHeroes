export function showErrorMessage(container, message) {
  container.insertAdjacentHTML(
    'beforeend',
    `<div class="o-error">
      <span class="o-error__message">
        ${message}
      </span>
    <div>`
  );
}
