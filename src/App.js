import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Features from './Components/Features/Features'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <div className='app-wrapper'>
          <Header />
            <Landing />
            <Features />
        </div>
      </Router>);
}

export default App;

