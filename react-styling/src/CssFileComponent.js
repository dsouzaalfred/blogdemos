import React from 'react';
import './CssFileComponent.css';

const CssFileComponent = ({ isActive }) => {
  return (
    <div className="wrapper">
      <p className="greenText">This text will be green</p>
      <p className="greenText multiple-properties">Multiple classes</p>
      <p className={isActive ? 'active' : 'disabled'}>Based on condition</p>
    </div>
  );
};

export default CssFileComponent;
