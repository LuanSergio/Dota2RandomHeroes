import { createHeroesGallery } from './modules/createHeroesGallery';
import { selectHero } from './modules/selectHero';
import { selectFilter } from './modules/selectFilter';
import { selectQuantity } from './modules/selectQuantity';
import { heroClick } from './modules/heroClick';
import { randomHeroes } from './modules/randomHeroes';

createHeroesGallery();

selectHero();
selectQuantity();
selectFilter();
heroClick()

randomHeroes();
