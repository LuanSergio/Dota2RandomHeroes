import addHeroStateOnClick from './modules/heroesStates/addHeroStateOnClick';
import createHeroesGallery from './modules/create/createHeroesGallery';
import createHerosOptions from './modules/create/createHerosOptions';
import createRolesOptions from './modules/create/createRolesOptions';
import validateQuantity from './modules/inputSettings/validateQuantity';
import filter from './modules/filterSystem/filter';
import clearInputOnFocus from './modules/inputSettings/clearInputOnFocus';
import randomHero from './modules/randomSystem/randomHero';
import preventContextMenu from './utils/preventContextMenu';

preventContextMenu();
createHeroesGallery();
validateQuantity();
createHerosOptions();
createRolesOptions();

clearInputOnFocus();
addHeroStateOnClick()
filter();
randomHero();
