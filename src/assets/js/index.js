import { createHeroesGallery } from './modules/create/createHeroesGallery';
import { createHerosOptions } from './modules/create/createHerosOptions';
import { createRolesOptions } from './modules/create/createRolesOptions';
import { validateQuantity } from './modules/validateQuantity';
import { filterHeroes } from './modules/filterSettings/filterHeroes';
import { clearInputOnFocus } from './modules/clearInputOnFocus';
import { addHeroStateOnClick } from './modules/addHeroStateOnClick';
import { randomHero } from './modules/randomHero';

createHeroesGallery();
validateQuantity();
createHerosOptions();
createRolesOptions();

clearInputOnFocus();
addHeroStateOnClick()
filterHeroes();

randomHero();
