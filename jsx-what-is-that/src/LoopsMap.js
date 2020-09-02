import React from 'react';

const LoopsMap = () => {
  const data = [
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' },
    { id: 4, label: 'Four' },
    { id: 5, label: 'Five' },
  ];
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};

export default LoopsMap;
