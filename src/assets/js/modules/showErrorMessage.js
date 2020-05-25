export function showErrorMessage(container, message) {
  container.insertAdjacentHTML(
    'beforeend',
    `<div class="o-error" data-error-message>
      <span class="o-error__message">
        ${message}
      </span>
    <div>`
  );
}
