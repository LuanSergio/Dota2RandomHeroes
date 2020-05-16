import { createHeroesGallery } from './modules/createHeroesGallery';
import { selectQuantity } from './modules/selectQuantity';
import { selectHero } from './modules/selectHero';
import { createRolesOptions } from './modules/createRolesOptions';
import { filterHeroes } from './modules/filterHeroes';
import { heroClick } from './modules/heroClick';
import { randomHero } from './modules/randomHero';

createHeroesGallery();
selectQuantity();
selectHero();
filterHeroes();
createRolesOptions();
heroClick()

randomHero();
