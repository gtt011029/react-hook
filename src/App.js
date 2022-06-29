import React from 'react';
import { Counter } from './features/counter/Counter';
import User from './features/user'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br/>
        <User />
      </header>
    </div>
  );
}

export default App;
