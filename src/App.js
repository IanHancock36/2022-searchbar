import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react' 
import Data from './data.json'

function App() {
  return (
    <div className="App">
    <input type = "text" placeholder="Search"/>
    {Data.map((val,key )=> {
      return <div>{val.name}</div>
    })}
    </div>
  );
}

export default App;
