import { h, FunctionComponent, JSX, ComponentType } from 'preact';
import css from './OptionCard.css';
import { Title } from './Title';

type Styles = {
  styleForOption: JSX.CSSProperties;
  styleForImg: JSX.CSSProperties;
  styleForTitle: JSX.CSSProperties;
};

type Props = {
  Img: ComponentType<{ className?: string; alt: string }>;
  title: string;
  className?: string;
  styles?: Styles;
};

export const OptionCard: FunctionComponent<Props> = ({
  Img,
  title,
  className = '',
  styles = { styleForOption: {}, styleForImg: {}, styleForTitle: {} },
}) => {
  const { styleForOption, styleForImg, styleForTitle } = styles;

  return (
    <div class={`${css.OptionCard} ${className}`} style={styleForOption}>
      <div class={css.OptionCard__imageWrapper} style={styleForImg}>
        <Img className={css.OptionCard__image} alt={title} />
      </div>
      <Title className={css.OptionCard__title} style={styleForTitle}>
        {title}
      </Title>
    </div>
  );
};
