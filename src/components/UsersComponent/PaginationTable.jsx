import React, {useMemo} from 'react';
import {useTable, usePagination, ReactTable} from 'react-table';
import PropTypes from 'prop-types'; 
// import {useTable} from "react-table-6";  
import "react-table-6/react-table.css" 

import MOCK_DATA from './userlendsqr.json';
// import {COLUMNS} from './columns';

// import './table.css';
// import "./react-table/react-table.css";

const COLUMNS = [

    {
        Header: 'ORGANIZATION',
        accessor: 'company'
    },

    {
        Header: 'USERNAME',
        accessor: 'username'
    },

    {
        Header: 'EMAIL',
        accessor: 'email'
    },

    {
        Header: 'PHONE NUMBER',
        accessor: 'phone'
    },

    {
        Header: 'DATE JOINED',
        accessor: 'date'
    },

    {
        Header: 'STATUS',
        accessor: 'status',
        Cell: row => {
            row.styles["color"] =
              row.value.toLowerCase() == "pending" ? "green" : "blue";
            row.styles["backgroundColor"] =
              row.value.toLowerCase() == "pending"
                ? "black"
                : row.value.toLowerCase() == "inactive"
                ? "salmon "
                : row.value.toLowerCase() == "active"
                ? "purple"
                : "yellow";
            return row.value;

        }
    }

]





const PaginationTable = () => {

    const columns = useMemo(() => (COLUMNS), [])
    const data = useMemo(() => (MOCK_DATA), [])

    localStorage.setItem("UserData", JSON.stringify(data));

    const tableInstance = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
    }, usePagination)

    const { getTableProps, 
         getTableBodyProps,
         getCellProps,
         headerGroups, 
         page, 
         nextPage, 
         previousPage, 
         canNextPage, 
         canPreviousPage, 
         pageOptions, 
         gotoPage,
         pageCount,
         state,
         prepareRow} = tableInstance;

    const { pageIndex } = state


    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead className="table-data-header">
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')} <img src="../../img/user-arrow.svg" alt=""/></th>
                                    ))
                                }

                            </tr>
                        ))
                    }
                    {/* <tr>
                        <th></th>
                    </tr> */}
                </thead>

                <tbody className="table-data-body" {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps}>
                                    {
                                        row.cells.map(cell => {
                                            return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                    <td><img src="../../img/table-icon.svg" alt=""/></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>

            </table>
            
            <div className="pagination-wrapper">
                <span className='paginate-left'>
                    Showing page{' '} 
                    <input 
                    type="number" 
                    defaultValue= {pageIndex + 1} 
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style={{width: `50px`}}
                    /> {' '}
                    <span> of {pageOptions.length}</span> {' '}
                </span>

                <span className='paginate-right'>
                <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>{' '}

                <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>{' '}
                <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>{' '}

                <button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                </span>

                {/* <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

                <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>

                <button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button> */}
            </div>
        </div>
    )
}

export default PaginationTable
