import { calcRelevanceAndPosition } from './calcRelevanceAndPosition';

import { getCardWidth } from './getCardWidth';

jest.mock('./getCardWidth');

const getCardWidthMock = getCardWidth as jest.MockedFunction<typeof getCardWidth>;

beforeEach(() => {
  getCardWidthMock.mockReset();
  getCardWidthMock.mockReturnValue(100);
});

describe('calcRelevanceAndPosition', () => {
  test('First slide, user has not touched slider', () => {
    expect(calcRelevanceAndPosition(0, 0)).toEqual({ position: 'left', relevance: 0 });
  });

  test('First slide, user has slided a half slide', () => {
    expect(calcRelevanceAndPosition(0, 50)).toEqual({ position: 'right', relevance: 0.5 });
  });

  test('First slide, user has slided one and half slide', () => {
    expect(calcRelevanceAndPosition(0, 150)).toEqual({ position: 'right', relevance: 1 });
  });

  test('Third slide, user has not touched slider', () => {
    expect(calcRelevanceAndPosition(2, 0)).toEqual({ position: 'left', relevance: 1 });
  });

  test('Third slide, user has slided half slide', () => {
    expect(calcRelevanceAndPosition(2, 50)).toEqual({ position: 'left', relevance: 1 });
  });

  test('Third slide, user has slided one and half slides', () => {
    expect(calcRelevanceAndPosition(2, 150)).toEqual({ position: 'left', relevance: 0.5 });
  });

  test('Third slide, user has slided one and three quarters slides', () => {
    expect(calcRelevanceAndPosition(2, 175)).toEqual({ position: 'left', relevance: 0.25 });
  });

  test('Third slide, user has slided two slides', () => {
    expect(calcRelevanceAndPosition(2, 200)).toEqual({ position: 'left', relevance: 0 });
  });
});
