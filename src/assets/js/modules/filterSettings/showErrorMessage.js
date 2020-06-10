export default function showErrorMessage(message){
  const container = document.querySelector('[data-random-settings]');
  const errorContainer = document.querySelector('[data-error-message]');
  if(errorContainer) {
    errorContainer.remove();
  }
  container.insertAdjacentHTML(
    'beforeend',
    `<div class="o-error" data-error-message>
      <span class="o-error__message">
        ${message}
      </span>
    <div>`
  );
}
