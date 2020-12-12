
// export const COLUMNS = [

//     {
//         id: 'col1',
//         Header: () => (
//             <span>
//               ORGANIZATION <img src="../../img/user-arrow.svg" alt=""/>
//             </span>
//           ),
//         accessor: 'company'
//     },

//     {
//         id: 'col2',
//         Header: () => (
//             <span>
//               USERNAME <img src="../../img/user-arrow.svg" alt=""/>
//             </span>
//           ),
//         accessor: 'username'
//     },

//     {
//         id: 'col3',
//         Header: () => (
//             <span>
//               EMAIL <img src="../../img/user-arrow.svg" alt=""/>
//             </span>
//           ),
//         accessor: 'email'
//     },

//     {
//         id: 'col4',
//         Header: () => (
//             <span>
//               PHONE NUMBER <img src="../../img/user-arrow.svg" alt=""/>
//             </span>
//           ),
//         accessor: 'phone'
//     },

//     {
//         id: 'col5',
//         Header: () => (
//             <span>
//               DATE JOINED <img src="../../img/user-arrow.svg" alt=""/>
//             </span>
//           ),
//         accessor: 'date',
//     },
//     {
//         id: 'col6',
//         Header: () => (
//             <span>
//               STATUS <img src="../../img/user-arrow.svg" alt=""/>
//             </span>
//           ),
//         accessor: 'status',
//         Cell: row => {
//             row.styles["color"] =
//               row.value.toLowerCase() == "pending" ? "green" : "blue";
//             row.styles["backgroundColor"] =
//               row.value.toLowerCase() == "pending"
//                 ? "black"
//                 : row.value.toLowerCase() == "inactive"
//                 ? "salmon "
//                 : row.value.toLowerCase() == "active"
//                 ? "purple"
//                 : "yellow";
//             row.styles["borderRadius"] = `100px`
//             row.styles["textAlign"] = `center`
//             return row.value;

//         }
//     },

//     {Cell: row => (
//         <td 
//         style={{
//             textAlign: "right",
//             display: "flex",
//             justifyContent: "flex-end"
//           }}
  
//         >
//              <img src="../../img/table-icon.svg" alt=""/>
//         </td>
//     )}
// ]

export const COLUMNS = [

    {
        dataField: 'company',
        text: <span> ORGANIZATION <img src="./../img/user-arrow.svg" alt=""/></span>,
    },

    {
       
        dataField: 'username',
        text: <span> USERNAME <img src="./../img/user-arrow.svg" alt=""/></span>,
    },

    {
     
      dataField: 'email',
      text: <span> EMAIL <img src="./../img/user-arrow.svg" alt=""/></span>,
    },

    {
        dataField: 'phone',
        text: <span> PHONE NUMBER <img src="./../img/user-arrow.svg" alt=""/></span>,
    },

    {
        dataField: 'date',
        text: <span> DATE JOINED <img src="./../img/user-arrow.svg" alt=""/></span>,
    },
    {
      dataField: 'status',
      text: <span> STATUS <img src="./../img/user-arrow.svg" alt=""/></span>,
      style: (cell, row, rowIndex, colIndex) => {
        console.log(cell);
        if (cell.toLowerCase() === 'active') {
          return {
            backgroundColor: `rgba(0, 192, 0, 0.08)`,
            color: `#39CD62`,
            borderRadius: `100px`,
            textAlign: `center`
          };
        } else if (cell.toLowerCase() === 'pending') {
          return {
            backgroundColor: `rgba(233, 178, 0, 0.08)`,
            color: `#E9B200`,
            borderRadius: `100px`,
            textAlign: `center`
          };
        } else if (cell.toLowerCase() === 'inactive') {
          return {
            backgroundColor: `rgba(84, 95, 125, 0.08)`,
            color: `#545F7D`,
            borderRadius: `100px`,
            textAlign: `center`
          };
        } else {
          return {
            backgroundColor: `rgba(192, 0, 0, 0.08)`,
            color: `#E4033B`,
            borderRadius: `100px`,
            textAlign: `center`
          };
        }
        
      }

    },
]

