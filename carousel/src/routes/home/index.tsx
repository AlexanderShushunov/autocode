import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';

import { preloadAllImages } from '../partners/preloadAllImages';

import style from './style.css';

const Home = () => {
  useEffect(() => {
    preloadAllImages();
  }, []);

  return (
    <div class={style.Home}>
      <h1>Демо-проект "Карусель"</h1>
      <Link class={style.Home__link} href="/partners">
        Информационные партнёры Holy JS 2021
      </Link>
    </div>
  );
};

export default Home;
