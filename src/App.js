import './App.css';
import Navbar from './Components/Navbar/Navigation';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;