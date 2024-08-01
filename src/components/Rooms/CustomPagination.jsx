import React from 'react';


const CustomPagination = ({ totalSlides, activeIndex, setActiveIndex }) => {
    return (
      <div>
        <span className='сustom-pagination'>{`${String(activeIndex + 1).padStart(2, '0')}`}</span> 
        <span className='сustom-pagination сustom-pagination__delimiter'>/</span>
        <span className='сustom-pagination custom-pagination__total'>{`0${totalSlides}`}</span>
      </div>
    );
  };

export default CustomPagination;