import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Friends from './Components/Friends'


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to = '/protected'>
            Friends
          </Link>
        </li>
        <li>
          <Link to = '/login'>
            Login
          </Link>
        </li>
        <li>
          <Link to = '/logout'>
            Log Out
          </Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path = '/protected' component={Friends}/>
        <PrivateRoute path = '/logout' component={Logout}/>
        <Route path = '/login' component={Login}/>
        <Route path = '/' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
