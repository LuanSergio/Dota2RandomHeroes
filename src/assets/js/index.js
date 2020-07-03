import addHeroStateOnClick from './modules/heroesStates/addHeroStateOnClick';
import createHeroesGallery from './modules/create/createHeroesGallery';
import createHerosOptions from './modules/create/createHerosOptions';
import createRolesOptions from './modules/create/createRolesOptions';
import validateQuantity from './modules/inputSettings/validateQuantity';
import filter from './modules/filterSystem/filter';
import clearInputOnFocus from './modules/inputSettings/clearInputOnFocus';
import randomHero from './modules/randomSystem/randomHero';
import preventContextMenu from './utils/preventContextMenu';

const heroes = [];
const auxHeroes = [];

preventContextMenu();
validateQuantity();
createHerosOptions();
createRolesOptions();
clearInputOnFocus();
filter(heroes, auxHeroes);
addHeroStateOnClick()
createHeroesGallery();
randomHero(heroes);
