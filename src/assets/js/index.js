import { createHeroesGallery } from './modules/createHeroesGallery';
import { selectQuantity } from './modules/selectQuantity';
import { selectHero } from './modules/selectHero';
import { selectFilter } from './modules/selectFilter';
import { filterHeroes } from './modules/filterHeroes';
import { heroClick } from './modules/heroClick';
import { randomHero } from './modules/randomHero';

createHeroesGallery();
filterHeroes();
selectQuantity();
selectHero();
selectFilter();
heroClick()

randomHero();
