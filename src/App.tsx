import * as React from 'react';
import styles from './app.module.scss';
import Image from './assets/download.png';
import SvgImg from './assets/sample.svg';
import Counter from './Counter';

export const App = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Sample React ypescrpt..{process.env.NODE_ENV} {process.env.name}
      </h1>
      <Counter />
      <img src={Image} alt="react logo" />
      <img src={SvgImg} alt="react logo" />
    </div>
  );
};
