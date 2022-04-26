import React, { useState } from 'react';
import Table from '../Table/Table';

const SchemaName = ({ schema }) => {
  const [table, setTable] = useState(false);
  const handleClick = (e) => {
    setTable(!table);
  };
  return (
    <>
      <div>
        <p onClick={handleClick}>{schema.schema_name}</p>
      </div>
      {table && <Table schema={schema} />}
    </>
  );
};

export default SchemaName;
