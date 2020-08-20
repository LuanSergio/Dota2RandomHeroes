export default function clearTextInputs() {
  const inputs = document.querySelectorAll('[data-filter-input]');
  inputs.forEach(input => {
    input.value = '';
  });
}