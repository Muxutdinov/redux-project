import React from 'react';

const FilterContent = () => {
  return <div className='card shadow-lg mt-4'>
      <div className='card-body'>
        <p className='card-text'>Filter by category</p>
        <div className='btn-group'>
          <button className='btn btn-outline-dark active'>All</button>
          <button className='btn btn-danger'>Hot News</button>
          <button className='btn btn-secondary'>Sport News</button>
          <button className='btn btn-primary'>World News</button>
          <button className='btn btn-warning'>Football News</button>
        </div>
      </div>
  </div>;
};

export default FilterContent;
