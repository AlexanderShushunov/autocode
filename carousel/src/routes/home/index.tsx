import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

const Home = () => (
  <div class={style.Home}>
    <h1>Демо-проект "Карусель"</h1>
    <Link class={style.Home__link} href="/partners">
      Информационные партнёры Holy JS 2021
    </Link>
  </div>
);

export default Home;
