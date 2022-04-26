import React from 'react';
import styles from './Container.module.css';
import DBContainer from '../DBContainer/DBContainer.jsx';

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-testid='title'>
        SnowFlake Database
      </h1>
      <DBContainer />
    </div>
  );
};

export default Container;
