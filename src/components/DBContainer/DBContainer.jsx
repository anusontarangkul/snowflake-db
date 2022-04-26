import React from 'react';
import styles from './NameContainer.module.css';
import Name from '../DBName/DBName';
import { DatabaseState } from '../../context/DatabaseContext';

const DBContainer = () => {
  const { data, openDB } = DatabaseState();

  const uniqueDB = [...new Set(data.map((table) => table.db_name))];

  return (
    <div className={styles.nameContainer}>
      {uniqueDB.map((db, i) => {
        return <Name db={db} key={i} openDB={openDB} />;
      })}
    </div>
  );
};

export default DBContainer;
