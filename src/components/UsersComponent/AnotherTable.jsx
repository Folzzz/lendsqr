import React, {useMemo} from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';



import MOCK_DATA from './userlendsqr.json';
import {COLUMNS} from './columns';

const AnotherTable = () => {

  localStorage.setItem("UserData", JSON.stringify(MOCK_DATA));

  const data = MOCK_DATA;

  const customTotal = (from, to, size) => (
    <span className="to-end">
     {' '} Showing { to } of { size }
    </span>
  );

  const options = {
    // paginationSize: 4,
    // pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    // firstPageText: 'First',
    // prePageText: 'Back',
    // nextPageText: 'Next',
    // lastPageText: 'Last',
    // nextPageTitle: 'First page',
    // prePageTitle: 'Pre page',
    // firstPageTitle: 'Next page',
    // lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '10', value: 10
    }, {
      text: '25', value: 25
    }, {
      text: '50', value: 50
    }, {
      text: '100', value: 100
    }, {
      text: 'All', value: data.length
    }] // A numeric array is also available. the purpose of above example is custom the text
  };
  


  return (
      <div style={{overflowX:"auto"}}>
        <BootstrapTable 
        keyField='id'
        data={data}
        columns={COLUMNS}

        pagination={ PaginationFactory(options) }
        bordered={ false }
        // wrapperClasses="table-responsive"
        // classes="react-bootstrap-table"

      />
      </div>
    )

}

export default AnotherTable;