import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
    return (
        <Router>
            <Home />
        </Router>
    );
};

export default App;