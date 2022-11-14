import { h } from 'preact';
import { OptionCarousel } from '../../components/OptionCarousel';
import { partnersOptions } from './partnersOptions';

const Partners = () => {
  const handleClick = (id: number) => {
    console.log(id);
  };
  return (
    <div>
      <OptionCarousel options={partnersOptions} onClick={handleClick} />
    </div>
  );
};

export default Partners;
