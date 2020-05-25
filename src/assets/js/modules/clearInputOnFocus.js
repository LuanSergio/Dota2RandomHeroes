export function clearInputOnFocus() {
  const inputGroup = document.querySelectorAll(
    `[data-input-heroes-role], 
     [data-search-hero-input]`
    );

  inputGroup.forEach(input => {
    input.addEventListener('click', (evt) => { 
      if(input.value){ 
         input.value = '';
         input.blur();
         input.focus();
      } 
    });
  }); 
}
