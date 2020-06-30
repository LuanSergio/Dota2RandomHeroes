export default function clearInputs() {
  const inputs = document.querySelectorAll('[data-filter-input]');
  inputs.forEach(input => {
    input.value = '';
  });
}