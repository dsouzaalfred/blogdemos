import React from 'react';
import './App.css';

import InlineStyleComponent from './InlineStyleComponent';
import CssFileComponent from './CssFileComponent';
import SassStyleComponent from './SassStyleComponent';
import CSSModuleComponent from './CSSModuleComponent';
import ScComponent from './ScComponent';
import Alert from './Alert';

function App() {
  return (
    <div className="App">
      <h2>Inline Style</h2>
      <InlineStyleComponent isActive />
      <h2>Style in CSS file</h2>
      <CssFileComponent isActive />
      <h2>Style using SASS</h2>
      <SassStyleComponent />
      <h2>Style CSS Modules</h2>
      <CSSModuleComponent />
      <h2>Styled components</h2>
      <ScComponent />
      <h2>CLSX</h2>
      <Alert type="error" text="This is an error" />
    </div>
  );
}

export default App;
