import { gapBetweenOptions } from './gapBetweenOptions';

type GetCardWidth = {
  (): number;
  result?: number;
};

export const getCardWidth: GetCardWidth = () => {
  if (!getCardWidth.result) {
    getCardWidth.result = 0.5 * document.body.offsetWidth + gapBetweenOptions;
  }

  return getCardWidth.result;
};
