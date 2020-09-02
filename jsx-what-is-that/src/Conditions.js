import React from 'react';

const Conditions = () => {
  const getNow = new Date();
  const getHour = getNow.getHours();
  return <h1>{getHour < 7 ? 'Sleeping' : 'Awake'}</h1>;
};

export default Conditions;
