import addHeroStateOnClick from './modules/heroesStates/addHeroStateOnClick';
import createHeroesGallery from './modules/create/createHeroesGallery';
import createHerosOptions from './modules/create/createHerosOptions';
import createRolesOptions from './modules/create/createRolesOptions';
import validateQuantity from './modules/inputSettings/validateQuantity';
import filterSystem from './modules/filterSystem/filterSystem';
import clearInputOnFocus from './modules/inputSettings/clearInputOnFocus';
import randomHero from './modules/randomSystem/randomHero';
import preventContextMenu from './utils/preventContextMenu';

const heroes = [];
const filterTags = [];

createHeroesGallery();
createHerosOptions();
createRolesOptions();
preventContextMenu();

filterSystem(heroes, filterTags);
validateQuantity(heroes);
clearInputOnFocus(heroes, filterTags);
addHeroStateOnClick(heroes);
randomHero(heroes);
