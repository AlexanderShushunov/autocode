import { preloadBeerJs } from './logos/BeerJs';

export function preloadAllImages() {
  return Promise.all([preloadBeerJs()]);
}
