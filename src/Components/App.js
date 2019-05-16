import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Players from './Players';
import Teams from './Teams';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
    <div>
    <Navbar></Navbar>
      <Route path = '/' exact component={Home}></Route>
      <Route path = '/players' exact component={Players}></Route>
      <Route path = '/teams' exact component={Teams}></Route>
    </div>
    </Router>
  );
}

export default App;
