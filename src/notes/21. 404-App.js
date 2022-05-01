import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
} */

// stateless functional component (SFC) a amra JAA (porps) nibo, TAAR (shei props er) propety amra RETURN krbo App. js a, shei SFC function er ATTRIBUTE a, along a with a value

function App() {
  return(
    <>
      <Router>
        <div className='App'>
          <Navbar />
          {/* jokhn amra different page a jabo, tokhn amdr page content koi jabe, seita amdr 2nd step a decide krbo, say content class er vitore nibo */}
          <div className='content'>
            {/* V.V.I. react-router-dom V6 a, Switch er jaygay Routes hbe */}
            <Switch>
              {/* ei Switch er vitore amdr shob Route i.e. page jabe, **Home_Page er Path only '/' */}
              {/* V.V.I. exact path is required! exact na dle, pailei match krbe! jmn, '/create' er sudhu '/' paya e Home component display koira dbe react!  */}
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/create'>
                <Create />
              </Route>
              <Route exact path='/blogs/:id'>
                <BlogDetails />
              </Route>
              {/* shobar bottom a dte hbe NotFound to catch any other routes */}
              <Route path='*'>
                <NotFound />
              </Route>
              {/* N.B. shob 'Route' Tags 'Switch' Tag er vitore MUST thakte hbe */}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;