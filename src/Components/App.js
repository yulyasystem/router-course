import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Players from './Players';
import Teams from './Teams';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/players' exact component={Players}></Route>
          <Route path='/teams' exact component={Teams}></Route>
          <Route render={()=><h1 className='text-center'> Four oh four lol :)</h1>}></Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
