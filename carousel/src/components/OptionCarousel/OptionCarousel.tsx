import { h, FunctionComponent, ComponentType } from 'preact';
import { OptionCard } from './OptionCard';
import { Carousel } from './Carousel';

type Option = {
  id: number;
  img: ComponentType<{ className?: string; alt: string }>;
  title: string;
};

type Props = {
  options: Array<Option>;
  onClick?: (id: number) => void;
};

export const OptionCarousel: FunctionComponent<Props> = ({
  options,
  onClick = () => undefined,
}) => {
  const renderSlide = ({
    id,
    relevance,
    position,
  }: {
    id: number;
    relevance: number;
    position: 'left' | 'right';
  }) => {
    const styleForOption = {
      transform: `scale(${1 - relevance * 0.2})`,
      opacity: 1 - relevance * 0.5,
      transformOrigin: position,
    };

    const styleForImg = {
      '--border-color': `rgba(3, 64, 245, ${1 - relevance})`,
    };

    const styleForTitle = {
      opacity: 1 - relevance,
    };

    const option = options.find((item) => item.id === id) ?? options[0];

    return (
      <OptionCard
        styles={{ styleForOption, styleForImg, styleForTitle }}
        Img={option.img}
        title={option.title}
        key={id}
      />
    );
  };

  const slideIds = options.map(({ id }) => id);

  return <Carousel ids={slideIds} renderSlide={renderSlide} onClick={onClick} />;
};
