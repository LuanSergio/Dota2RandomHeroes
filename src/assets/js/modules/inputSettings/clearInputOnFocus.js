import clearTextInputs from './clearTextInputs'

export default function clearInputOnFocus() {
  const inputGroup = document.querySelectorAll(`[data-filter-input]`);

  inputGroup.forEach(input => {
    input.addEventListener('click', (evt) => { 
      clearTextInputs();
      if(input.value){ 
         input.value = '';
         input.blur();
         input.focus();
      } 
    });
  }); 
}
