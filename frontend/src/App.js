import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className ="App"> 
      <Route path = "/">
        <Header/>
      </Route>
    </div>
    </Router>
  );
}

export default App;