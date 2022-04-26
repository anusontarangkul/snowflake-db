import React, { createContext, useState, useContext, useEffect } from 'react'

const Database = createContext()

const DatabaseContext = ({ children }) => {

    const [openDB, setOpenDB] = useState([])


    const data = [
        { name: 'TABLE_1', db_name: 'DEMO_DB', schema_name: 'PUBLIC', },
        { name: 'TABLE_2', db_name: 'DEMO_DB', schema_name: 'INFORMATION_SCHEMA', },
        { name: 'TABLE_3', db_name: 'SNOWFLAKE', schema_name: 'PUBLIC', },
        { name: 'TABLE_4', db_name: 'SNOWFLAKE_SAMPLE_DATA', schema_name: 'INFORMATION_SCHEMA', },
        { name: 'CALL_CENTER', db_name: 'SNOWFLAKE_SAMPLE_DATA', schema_name: 'TPCDS_SF100TCL', },
        { name: 'CATALOG_PAGE', db_name: 'SNOWFLAKE_SAMPLE_DATA', schema_name: 'TPCDS_SF100TCL', }
    ]

    return (
        <Database.Provider value={{ data, openDB, setOpenDB }}>
            {children}
        </Database.Provider>
    )
}

export default DatabaseContext

export const DatabaseState = () => {
    return useContext(Database)
}