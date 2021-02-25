import React from 'react';
import './App.css';
import PropsBoolean from './PropsBoolean';

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>css</p>
      <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/>
    </div>
  );
}

export default App;