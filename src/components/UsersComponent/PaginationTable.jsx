import React, {useMemo} from 'react';
import {useTable, usePagination} from 'react-table';
// import {useTable} from "react-table-6";  
import "react-table-6/react-table.css" 

import MOCK_DATA from './userlendsqr.json';
// import {COLUMNS} from './columns';

// import './table.css';
// import "./react-table/react-table.css";

export const COLUMNS = [

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
        // Cell: row  => {
        //     row.styles['color']= row.value == 'active' ? '#39CD62' : row.value == 'inactive' ? '#545F7D' : row.value == 'pending' ? '#E9B200' : '#E4033B' ;
        //     row.styles['backgroundColor'] = row.value ==  'active' ? 'rgba(0, 192, 0, 0.04)' : row.value == 'inactive' ? 'rgba(0, 0, 192, 0.04) ': row.value == 'pending' ? 'rgba(94, 119, 37, 0.04)' : 'rgba(228,3,59,0.04)';
        //     return row.value;
        // }

        // getProps: (state, rowInfo, column) => {
        //     return {
        //         style: {
        //             backgroundColor: `rowInfo && rowInfo.row.status == 'active' ? red : green`,
        //         },
        //     };
        // }

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
                    {/* <tr>
                        <td></td>
                    </tr> */}
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
