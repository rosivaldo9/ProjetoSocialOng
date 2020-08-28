import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './componente/NavBar'
import Landing from './componente/Landing'
import Login from './componente/login1'
import Register from './componente/Register'
import Profile from './componente/Profile'
import R from './componente/graficos'

import  {history} from './History'


class App extends Component {

  render() {
    return (

      <BrowserRouter history={history}>
        <div className="App">
            
            <div>
              <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            </Switch>
            </div>
          
        </div>
      </BrowserRouter>





/*
<div className="container-fluid">
  <NavBar/>
  <SideBar/>
</div>
*/
    );
  }
}

export default App;
