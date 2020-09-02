import React from 'react';

const ParentNodeThree = () => {
  const getNow = new Date();
  const getHour = getNow.getHours();
  return (
    <>
      { getHour >= 0 && getHour <= 7 && <h1>Sleeping</h1> }
      { getHour > 7 && getHour <= 9 && <h1>Morning routine</h1> }
      { getHour > 9 && getHour <=13 && <h1>Work</h1> }
      { getHour > 13 && getHour <=14 && <h1>Lunch</h1> }
      { getHour > 14 && getHour <=18 && <h1>Work</h1> }
      { getHour > 18 && getHour <=22 && <h1>Family Time</h1> }
      { getHour > 22 && <h1>Sleeping</h1> }
    </>
  )
};

export default ParentNodeThree;
