import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './componente/NavBar'
import Landing from './componente/Landing'
import Login from './componente/login'
import Register from './componente/Register'
import Profile from './componente/Profile'
import R from './componente/graficos'

import  {history} from './History'

class App extends Component {

  render() {
    return (
      <BrowserRouter history={history}>
      
              <Switch>
             <Route exact path="/" component={Login} /> 
            <Route exact path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            </Switch>
      
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

export default hot(module)(App);
