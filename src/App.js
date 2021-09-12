import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/pages/Signin';
import Places from './components/pages/Places'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places' exact component={Places} />
          <Route path='/video' component={Signin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
