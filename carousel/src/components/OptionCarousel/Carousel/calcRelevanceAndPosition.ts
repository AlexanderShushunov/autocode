export const calcRelevanceAndPosition = (
  idx: number,
  offset: number,
  cardWidth: number
): { relevance: number; position: 'left' | 'right' } => {
  const step = offset / cardWidth;

  if (step === idx) {
    return {
      relevance: 0,
      position: 'left' as const,
    };
  }

  return {
    relevance: Math.min(1, Math.abs(step - idx)),
    position: step - idx < 0 ? ('left' as const) : ('right' as const),
  };
};
