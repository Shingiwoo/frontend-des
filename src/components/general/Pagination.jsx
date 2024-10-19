import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
// import 'bootstrap/dist/css/bootstrap.css'; // Assuming Bootstrap styles are included elsewhere

function definePagination(props) {
  const [currentPage, setCurrentPage] = useState(props.currentPage || 1); // Set default page if not provided

  const handlePageChange = (page) => {
    setCurrentPage(page);
    props.onChange(page); // Pass the changed page to the parent component
  };

  return (
    props.total > 0 && (
      <ResponsivePagination
        total={props.total}
        current={currentPage}
        onPageChange={handlePageChange}
        perPage={props.perPage} // Optional: Add perPage prop if needed
        // Additional customization options (refer to react-responsive-pagination docs)
        classes={{
          pagination: `pagination pagination-sm justify-content-${props.position} mb-0 mt-3`,
          activePage: 'page-item active',
          page: 'page-item',
          pageLink: 'page-link',
        }}
      />
    )
  );
}

export default definePagination;