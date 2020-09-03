import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import SmartComponent from './buttonHOC';

const SmartButton = SmartComponent(Button)

function App() {
  return (
    <div className="App">
        <SmartButton />
        <Button />
    </div>
  );
}

export default App;
