import { h, RenderableProps, VNode, JSX } from 'preact';
import { Link } from 'preact-router';

import { useState, useEffect } from 'preact/hooks';

import { calcRelevanceAndPosition } from './calcRelevanceAndPosition';

import style from './Carousel.css';

type Pros = {
  ids: Array<number>;
  renderSlide: (params: { id: number; relevance: number; position: 'left' | 'right' }) => VNode;
  className?: string;
  onClick?: (id: number) => void;
};

const GAP = 8;

export const Carousel: (props: RenderableProps<Pros>) => VNode = ({
  ids,
  renderSlide,
  className = '',
  onClick = () => undefined,
}) => {
  const [offset, setOffset] = useState(0);
  const [optionElWidth, setOptionElWidth] = useState(0);

  const handleScroll = (event: JSX.TargetedEvent<HTMLDivElement>) => {
    if (event.currentTarget === null) {
      return {};
    }
    setOffset(event.currentTarget.scrollLeft);
  };

  useEffect(() => {
    setOptionElWidth(0.5 * document.body.offsetWidth + GAP);
  }, []);

  return (
    <div
      className={`${style.Carousel} ${className}`}
      style={{
        '--gap-between-options': `${GAP}px`,
      }}
      onScroll={handleScroll}
    >
      {ids.map((id, idx) => (
        <Link key={id} className={style.Carousel__slide} onClick={() => onClick(id)}>
          {renderSlide({ id, ...calcRelevanceAndPosition(idx, offset, optionElWidth) })}
        </Link>
      ))}
    </div>
  );
};
