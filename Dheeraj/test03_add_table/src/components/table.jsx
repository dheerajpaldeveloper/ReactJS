import React from 'react';

function Table({ data }) {
    console.log("test 5",data)
   
  return (
    <div className="table">
      <h2>Data Table</h2>
      {/* <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.job}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Table;
