import React from "react";
import { useState } from "react";

const Pagination = (props) => {
  const [ totalPages, setTotalPages ] = useState(10)
  const [ page, setPage ] = useState(2)

const handlePageAdd = () => {
  setPage(page + 1);
}
const handlePageMinus = () => {
  setPage(page - 1)
}


    return (
<div>
<div>Current Page: {page}</div>
 
 <button
   onClick={handlePageMinus}
   disabled={page === 1}
 >
   Previous Page
 </button>
  
 <button
   onClick={handlePageAdd}
   disabled={page === totalPages}
 >
   Next Page
 </button>
</div>
    )
}

export default Pagination;