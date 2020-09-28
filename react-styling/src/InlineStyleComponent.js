import React from 'react';

const InlineStyleComponent = ({ isActive }) => {
  const pTagStyle = { color: 'darksalmon' };
  return (
    <div>
      <p style={{ color: 'green' }}>This text will be green</p>
      <p style={pTagStyle}>This text will be darksalmon</p>
      <p
        style={{
          padding: 20,
          margin: '20px 15px',
          fontSize: '2rem',
          color: 'darkorange',
          border: '1px solid darkgrey',
        }}
      >
        Multiple CSS Properties
      </p>
      <p style={{ color: isActive ? 'yellowgreen' : 'darkgrey' }}>
        Based on condition
      </p>
    </div>
  );
};

export default InlineStyleComponent;
