import React, { useState } from 'react';

const SchemaName = ({ schema }) => {
  const [table, setTable] = useState(false);
  const handleClick = (e) => {
    setTable(true);
  };
  return <p onClick={handleClick}>{schema.schema_name}</p>;
};

export default SchemaName;
