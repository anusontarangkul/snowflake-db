import React from 'react';
import styles from './Name.module.css';
import { DatabaseState } from '../../context/DatabaseContext';
import SchemaContainer from '../SchemaContainer/SchemaContainer';

const Name = ({ db }) => {
  const { openDB, setOpenDB } = DatabaseState();
  const handleClick = (e) => {
    const clickedDB = e.target.textContent;
    if (openDB.includes(clickedDB)) {
      return setOpenDB(openDB.filter((db) => db !== clickedDB));
    }

    setOpenDB((openDB) => [...openDB, clickedDB]);
  };
  return (
    <div>
      <p onClick={handleClick}>{db}</p>
      {openDB.includes(db) && <SchemaContainer db={db} />}
    </div>
  );
};

export default Name;
