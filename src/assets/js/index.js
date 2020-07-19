import createHeroesGallery from './modules/create/createHeroesGallery';
import createHerosOptions from './modules/create/createHerosOptions';
import createRolesOptions from './modules/create/createRolesOptions';
import createTagsContainer from './modules/create/createTagsContainer';
import mobileHeroesGallerySlider from './modules/create/mobileHeroesGallerySlider'
import validateQuantity from './modules/inputSettings/validateQuantity';
import quantityPlaceHolderMobile from './modules/inputSettings/quantityPlaceHolderMobile'
import filterSystem from './modules/filterSystem/filterSystem';
import clearInputOnFocus from './modules/inputSettings/clearInputOnFocus';
import randomHero from './modules/randomSystem/randomHero';
import preventContextMenu from './utils/preventContextMenu';
const heroes = [];
const filterTags = [];

createHeroesGallery();
mobileHeroesGallerySlider();
createHerosOptions();
createRolesOptions();
createTagsContainer();
preventContextMenu();

filterSystem(heroes, filterTags);
quantityPlaceHolderMobile();
validateQuantity(heroes);
clearInputOnFocus(heroes, filterTags);
randomHero(heroes);
