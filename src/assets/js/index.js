import sortHeroesOptions from './modules/create/sortHeroesOptions';
import tagsContainer from './modules/create/tagsContainer';
import mobileTagsContainer from './modules/create/mobileTagsContainer';
import mobileHeroesGallerySlider from './modules/create/mobileHeroesGallerySlider'
import validateQuantity from './modules/inputSettings/validateQuantity';
import quantityPlaceHolderMobile from './modules/inputSettings/quantityPlaceHolderMobile'
import filterSystem from './modules/filterSystem/filterSystem';
import clearInputOnFocus from './modules/inputSettings/clearInputOnFocus';
import randomHero from './modules/randomSystem/randomHero';
import preventContextMenu from './utils/preventContextMenu';

const screenWidth = screen.width;
const heroes = [];
const filterTags = [];

if(screenWidth < 767) {
  mobileHeroesGallerySlider();
  quantityPlaceHolderMobile();
  mobileTagsContainer();
} else {
  tagsContainer();
}

validateQuantity(heroes);
sortHeroesOptions();
preventContextMenu();

filterSystem(heroes, filterTags);
clearInputOnFocus(heroes, filterTags);
randomHero(heroes);
