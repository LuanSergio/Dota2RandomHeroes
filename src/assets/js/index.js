import { createHeroesGallery } from './modules/createHeroesGallery';
import { selectHero } from './modules/selectHero';
import { selectFilter } from './modules/selectFilter';
import { heroClick } from './modules/heroClick';
import { randomHero } from './modules/randomHero';

createHeroesGallery();

selectHero();
selectFilter();
heroClick()

randomHero();
