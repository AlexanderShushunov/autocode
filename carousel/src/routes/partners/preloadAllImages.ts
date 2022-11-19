import { preloadBeerJs } from './logos/BeerJs';
import { preloadDeusOps } from './logos/DeusOps';
import { preloadFrontend } from './logos/Frontend';
import { preloadItWorld } from './logos/ItWorld';
import { preloadWebStack } from './logos/WebStack';
import { preloadFrontEndDev } from './logos/FrontEndDev';
import { preloadMathRandom } from './logos/MathRandom';
import { preloadPiterJs } from './logos/PiterJs';

export function preloadAllImages() {
  return Promise.all([
    preloadBeerJs(),
    preloadDeusOps(),
    preloadFrontend(),
    preloadItWorld(),
    preloadWebStack(),
    preloadFrontEndDev(),
    preloadMathRandom(),
    preloadPiterJs(),
  ]);
}
