import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Places from './components/pages/PlacesData.js';
import Signin from './components/pages/Signin';
import PlacesData from './components/pages/PlacesData'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places' exact component={Places} />
          <Route path='/video' component={Signin} />
          <Route path='/places/:_id' component={PlacesData}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
