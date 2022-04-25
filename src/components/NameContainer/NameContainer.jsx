import React from 'react';
import styles from './NameContainer.module.css';
import Name from '../Name/Name';
import { DatabaseState } from '../../context/DatabaseContext';

const NameContainer = () => {
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

export default NameContainer;
