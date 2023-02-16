import React from 'react'
import Pagination from "react-js-pagination";
export default function PaginationComponent(props) {
  	const {results} = props;
    
	if(results && results.hasOwnProperty('total')){
    return (
      <div className="pagination">
             <Pagination
              activePage={results?.current_page}
              itemsCountPerPage={results?.per_page}
              totalItemsCount={results?.total}
              pageRangeDisplayed={5}
              linkClass={"page-link"}
              onChange={props.handlePageChange}
            />
          </div>
      )
  }
  
}
