import React, { Component } from 'react';
import ReactTable from  "react-table-6";
import "react-table-6/react-table.css";
import './user.css';


import MOCK_DATA from './userlendsqr.json';
import {COLUMNS} from './columns';

const TableSection = () => {
    return (
        <div>
            <ReactTable
                data={MOCK_DATA}
                columns={COLUMNS}
                defaultPageSize={10}
                className="custom-table"
            >
            </ReactTable>
        </div>
    )
}

export default TableSection
