import React, { useState } from 'react';
import { DatabaseState } from '../../context/DatabaseContext';

const Table = ({ schema }) => {
  const { data, openDB } = DatabaseState();
  const [openTable, setOpenTable] = useState(false);

  const findTables = data.filter((table) => {
    return (
      table.db_name === schema.db_name &&
      table.schema_name === schema.schema_name
    );
  });

  console.log('appr tables', findTables);

  const handleClick = (e) => {
    setOpenTable(!openTable);
  };
  return (
    <div>
      <p onClick={handleClick}>Table</p>
      {openTable &&
        findTables.map((table, i) => {
          return <p key={i}>{table.name}</p>;
        })}
    </div>
  );
};

export default Table;
