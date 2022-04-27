import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import ClockTick from './components/Clock';

/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
} */

// stateless functional component (SFC) a amra JAA (porps) nibo, TAAR (shei props er) propety amra RETURN krbo App. js a, shei SFC function er ATTRIBUTE a, along a with a value

function App() {
  return(
    <>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App;