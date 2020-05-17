import { createHeroesGallery } from './modules/createHeroesGallery';
import { validateQuantity } from './modules/validateQuantity';
import { createHerosOptions } from './modules/createHerosOptions';
import { createRolesOptions } from './modules/createRolesOptions';
import { filterHeroes } from './modules/filterHeroes';
import { addHeroStateOnClick } from './modules/addHeroStateOnClick';
import { randomHero } from './modules/randomHero';

createHeroesGallery();
validateQuantity();
createHerosOptions();
createRolesOptions();

addHeroStateOnClick()
filterHeroes();

randomHero();
