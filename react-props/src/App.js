import React from 'react';

import PropsExample from './PropsExample';

import './App.css';

function App() {
  const handleDisableClick = () => {
    console.log('Some action to disable user.');
  };
  return (
    <div className="app">
      <PropsExample
        name="Alfred DSouza"
        userId="no"
        roles={['editor', 'admin']}
        lastLogin={{ date: '20/07/2020', location: 'London' }}
        isActive
        handleDisableClick={handleDisableClick}
      />
    </div>
  );
}

export default App;
