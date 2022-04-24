import React from 'react';
import styles from './NameContainer.module.css';
import Name from '../Name/Name';

const NameContainer = () => {
  return (
    <div className={styles.nameContainer}>
      <Name />
      <Name />
    </div>
  );
};

export default NameContainer;
