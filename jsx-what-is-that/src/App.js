import React from 'react';
import './App.css';

import FirstComponent from './FirstComponent';
import MathAdd from './MathAdd';
import MathRandom from './MathRandom';
import StringLiterals from './StringLiterals';
import StringLiteralsTwo from './StringLiteralsTwo';
import StringLiteralsThree from './StringLiteralsThree';
import Conditions from './Conditions';
import Attributes from './Attributes';
import AttributesTwo from './AttributesTwo';
import ParentNode from './ParentNode';
import ParentNodeTwo from './ParentNodeTwo';
import ParentNodeThree from './ParentNodeThree';
import LoopsMap from './LoopsMap';
import LoopsFilter from './LoopsFilter';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <MathAdd />
      <MathRandom />
      <StringLiterals />
      <StringLiteralsTwo />
      <StringLiteralsThree />
      <Conditions />
      <Attributes />
      <AttributesTwo />
      <ParentNode />
      <ParentNodeTwo />
      <ParentNodeThree />
      <LoopsMap />
      <LoopsFilter />
    </div>
  );
}

export default App;
