import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
} */

// stateless functional component (SFC) a amra JAA (porps) nibo, TAAR (shei props er) propety amra RETURN krbo App. js a, shei SFC function er ATTRIBUTE a, along a with a value

function App() {
  return(
    <>
      {/* 1st step, App class k 'Router' er vitore WRAP korlm!  */}
      <Router>
        <div className='App'>
          {/* header i.e. Navbar always show krbe, jei page a e thakuk, tai eita Switch er Baire */}
          <Navbar />
          {/* jokhn amra different page a jabo, tokhn amdr page content koi jabe, seita amdr 2nd step a decide krbo, say content class er vitore nibo */}
          <div className='content'>
            {/* VVI react-router-dom V6 a, Switch er jaygay Routes hbe */}
            <Switch>
              {/* ei Switch er vitore amdr shob Route i.e. page jabe, **Home_Page er Path only '/' */}
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;