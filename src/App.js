import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from './components/routes'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes></Routes>
    </div>
    </Router>
  );
}

export default App;
