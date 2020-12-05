import "react-table-6/react-table.css" 

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
        // Cell: (row, original, index, viewIndex, level, nestingPath, aggregated, subRows,rowInfo)  => {
        //     row.styles['color ']= row.value == 'active' ? '#39CD62' : row.value == 'inactive' ? '#545F7D' : row.value == 'pending' ? '#E9B200' : '#E4033B' ;
        //     row.styles['backgroundColor'] = row.value ==  'active' ? 'rgba(0, 192, 0, 0.04)' : row.value == 'inactive' ? 'rgba(0, 0, 192, 0.04) ': row.value == 'pending' ? 'rgba(94, 119, 37, 0.04)' : 'rgba(228,3,59,0.04)';
        //     return row.status;
        // }
        getProps: (state, rowInfo, column) => {
            return {
                style: {
                    backgroundColor: rowInfo.row.status == 'active' ? 'red' : 'green',
                },
            };
        }

    }

]

