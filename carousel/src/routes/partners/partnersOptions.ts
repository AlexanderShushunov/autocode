import { ComponentType } from 'preact';

import { BeerJs } from './logos/BeerJs';
import { DeusOps } from './logos/DeusOps';
import { FrontEndDev } from './logos/FrontEndDev';
import { Frontend } from './logos/Frontend';
import { ItWorld } from './logos/ItWorld';
import { PiterJs } from './logos/PiterJs';
import { WebStack } from './logos/WebStack';

export const partnersOptions: Array<{
  id: number;
  img: ComponentType<{ className?: string; alt: string }>;
  title: string;
}> = shuffle([
  {
    id: 1,
    img: BeerJs,
    title: 'BeerJS',
  },
  {
    id: 2,
    img: DeusOps,
    title: 'DeusOps',
  },
  {
    id: 3,
    img: FrontEndDev,
    title: 'FrontEndDev',
  },
  {
    id: 4,
    img: Frontend,
    title: 'Frontend',
  },
  {
    id: 5,
    img: ItWorld,
    title: 'IT-World\n',
  },
  {
    id: 6,
    img: PiterJs,
    title: 'PiterJS',
  },
  {
    id: 7,
    img: WebStack,
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
