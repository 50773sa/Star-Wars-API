import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'


import '../App.css'


function Pagination({ people, peoplePerPage,  currentPage}) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(people / peoplePerPage); i++) {
    pageNumbers.push(i)
 }
// console.log('PAGE NUMBER', pageNumbers)
  const handlePageClick = async (data) => {
    console.log('Selected Data:', data.selected)

    currentPage = data.selected + 1
}
  
  return (
      <div>
        <ReactPaginate
          containerClassName={'pagination'}
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={2}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          pageClassName={'paginationBtn'}
          pageLinkClassName={'pageNum'}
          previousLinkClassName={'page-link'}
          nextClassName={'pageLink'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>   
  )
}

export default Pagination