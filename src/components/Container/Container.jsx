import React from 'react';
import styles from './Container.module.css';
import NameContainer from '../NameContainer/NameContainer.jsx';

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-testid='title'>
        SnowFlake Database
      </h1>
      <NameContainer />
    </div>
  );
};

export default Container;
