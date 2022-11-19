import { h } from 'preact';
import { OptionCarousel } from '../../components/OptionCarousel';
import { partnersOptions } from './partnersOptions';
import style from './style.css';

const Partners = () => {
  const handleClick = (id: number) => {
    console.log(id);
  };
  return (
    <div className={style.Partners}>
      <OptionCarousel options={partnersOptions} onClick={handleClick} />
    </div>
  );
};

export default Partners;
