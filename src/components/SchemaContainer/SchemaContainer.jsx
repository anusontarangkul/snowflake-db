import React from 'react';
import { DatabaseState } from '../../context/DatabaseContext';
import SchemaName from '../SchemaName/SchemaName';

const SchemaContainer = ({ db }) => {
  const { openSchema, setOpenSchema, data } = DatabaseState();

  const schemaFromDB = [
    ...new Set(
      data.filter((table) => {
        return table.db_name === db;
      })
    ),
  ];

  const uniqueSchema = schemaFromDB.filter(
    (a, i) =>
      schemaFromDB.findIndex((s) => a.schema_name === s.schema_name) === i
  );

  return (
    <div>
      {uniqueSchema.map((schema, i) => {
        return <SchemaName schema={schema} key={i} />;
      })}
    </div>
  );
};

export default SchemaContainer;
