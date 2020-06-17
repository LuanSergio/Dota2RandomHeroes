export default function clearInputOnFocus() {
  const inputGroup = document.querySelectorAll(
    `[data-heroes-role-input], 
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
