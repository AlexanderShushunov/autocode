import { h, FunctionComponent, JSX } from 'preact';
import css from './OptionCard.css';

type Styles = {
  styleForOption: JSX.CSSProperties;
  styleForImg: JSX.CSSProperties;
  styleForTitle: JSX.CSSProperties;
};

type Props = {
  optionImg: string;
  optionTitle?: string;
  className?: string;
  styles?: Styles;
};

export const OptionCard: FunctionComponent<Props> = ({
  optionImg,
  optionTitle,
  className = '',
  styles = { styleForOption: {}, styleForImg: {}, styleForTitle: {} },
}) => {
  const { styleForOption, styleForImg, styleForTitle } = styles;

  return (
    <div class={`${css.OptionCard} ${className}`} style={styleForOption}>
      <div class={css.OptionCard__imageWrapper} style={styleForImg}>
        <img class={css.OptionCard__image} alt={optionImg} src={optionImg} />
      </div>
      {optionTitle && (
        <div class={css.OptionCard__title} style={styleForTitle}>
          {optionTitle}
        </div>
      )}
    </div>
  );
};
