import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <div className='app-wrapper'>
          <Header />

        </div>
      </Router>);
}

export default App;

