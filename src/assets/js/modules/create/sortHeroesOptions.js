export default function sortHeroesOptions() {
  const options = document.querySelectorAll('[data-search-hero-list] > option');
  const values = Array.from(options).map((option) => option.value).sort();
  
  options.forEach((option, index) => {
    option.value = values[index];
  })
}
