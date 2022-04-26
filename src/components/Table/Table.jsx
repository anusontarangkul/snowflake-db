import React, { useState } from 'react';
import { DatabaseState } from '../../context/DatabaseContext';
import rightArrow from '../../icons/right-arrow.png';
import downArrow from '../../icons/down-arrow.png';
import tableIcon from '../../icons/table.png';

const Table = ({ schema }) => {
  const { data, openDB } = DatabaseState();
  const [openTable, setOpenTable] = useState(false);

  const findTables = data.filter((table) => {
    return (
      table.db_name === schema.db_name &&
      table.schema_name === schema.schema_name
    );
  });

  const handleClick = (e) => {
    setOpenTable(!openTable);
  };
  return (
    <div className='inner-container'>
      <div className='flex'>
        {openTable ? (
          <img className='triangle' src={downArrow} alt='down arrow' />
        ) : (
          <img className='triangle' src={rightArrow} alt='right arrow' />
        )}
        <p onClick={handleClick}>Table</p>
      </div>
      {openTable &&
        findTables.map((table, i) => {
          return (
            <div className='flex'>
              <img src={tableIcon} />
              <p key={i}>{table.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Table;
