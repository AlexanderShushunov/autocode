import beerJs from './logos/beerJs.jpeg';
import deusOps from './logos/deusOps.jpeg';
import frontEndDev from './logos/frontEndDev.jpeg';
import frontend from './logos/frontend.jpeg';
import itWorld from './logos/itWorld.jpeg';
import piterJs from './logos/piterJs.jpeg';
import webStack from './logos/webStack.jpeg';

export const partnersOptions: Array<{
  id: number;
  img: string;
  title?: string;
}> = shuffle([
  {
    id: 1,
    img: beerJs,
    title: 'BeerJS',
  },
  {
    id: 2,
    img: deusOps,
    title: 'DeusOps',
  },
  {
    id: 3,
    img: frontEndDev,
    title: 'FrontEndDev',
  },
  {
    id: 4,
    img: frontend,
    title: 'Frontend',
  },
  {
    id: 5,
    img: itWorld,
    title: 'IT-World\n',
  },
  {
    id: 6,
    img: piterJs,
    title: 'PiterJS',
  },
  {
    id: 7,
    img: webStack,
    title: 'Web Stack',
  },
]);

function shuffle<T>(arr: Array<T>) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}
