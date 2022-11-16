import { h, FunctionComponent, JSX } from 'preact';

import css from './style.css';

type Props = {
  className: string;
  style: JSX.CSSProperties;
};

export const Title: FunctionComponent<Props> = ({ children, className, style }) => (
  <div class={`${css.Title} ${className}`} style={style}>
    {children}
  </div>
);
