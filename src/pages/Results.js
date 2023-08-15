import React from 'react';
import { Outlet } from 'react-router-dom';
  
const Results = () => {
  return (
    <div>
      <h1>Results</h1>
      <Outlet />
    </div>
  );
};
  
export default Results;