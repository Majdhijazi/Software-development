import React from 'react';
import './datagrid.css';

const DataGrid = () => {
    const columns = ['Name', 'Age', 'Country'];

    const data = [
      { Name: 'John Doe', Age: 30, Country: 'USA' },
      { Name: 'Jane Doe', Age: 25, Country: 'Canada' },
    ];

  return (
    <div className="data-grid">
      <div className="header-row">
        {columns.map((column, index) => (
          <div key={index} className="column-header">
            {column}
          </div>
        ))}
      </div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="data-row">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="data-cell">
              {row[column]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
