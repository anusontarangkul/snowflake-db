import React, { useState } from 'react';
import Table from '../Table/Table';
import schemaIcon from '../../icons/schema.png';

const SchemaName = ({ schema }) => {
  const [table, setTable] = useState(false);
  const handleClick = (e) => {
    setTable(!table);
  };
  return (
    <>
      <div className='flex' onClick={handleClick}>
        <img src={schemaIcon} alt='schema icon' />
        <p>{schema.schema_name}</p>
      </div>
      {table && <Table schema={schema} />}
    </>
  );
};

export default SchemaName;
