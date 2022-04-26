import React from 'react';
import { DatabaseState } from '../../context/DatabaseContext';
import SchemaContainer from '../SchemaContainer/SchemaContainer';
import dbIcon from '../../icons/db.png';

const DBName = ({ db }) => {
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
      <div className='flex' onClick={handleClick}>
        <img src={dbIcon} />
        <p>{db}</p>
      </div>
      {openDB.includes(db) && <SchemaContainer db={db} />}
    </div>
  );
};

export default DBName;
