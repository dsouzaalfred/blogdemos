import React from 'react';

const LoopsFilter = () => {
  const data = [
    {id: 1, label: 'One'},
    {id: 2, label: 'Two'},
    {id: 3, label: 'Three'},
    {id: 4, label: 'Four'},
    {id: 5, label: 'Five'}
  ];
  return (
    <ul>
      { data.filter(item => item.id % 2 === 0).map(filteredData => <li key={filteredData.id}>{filteredData.label}</li>)}
    </ul>
  );
};

export default LoopsFilter;
