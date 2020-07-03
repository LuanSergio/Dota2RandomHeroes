export default function clearErrorMessage() {
  const errorContainer = document.querySelector('[data-error-message]');
  if(errorContainer) {
    errorContainer.remove();
    console.log('fois');
    
  }
}