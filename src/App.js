import React from 'react';
import './App.css';
import Taskbar from './components/Taskbar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      <Screen />
      <Taskbar />
    </div>
  );
}

export default App;
