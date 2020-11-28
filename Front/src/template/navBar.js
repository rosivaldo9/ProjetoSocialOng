import React from 'react'
import './style.css'
import { Facebook, Instagram, Email, Person } from '@material-ui/icons';

const NavBar = (props) => {
    return (
       
<nav className="navbar navbar-light navconfig a justify-content-between" > 
  <a className="navbar-brand">Painel administrativo</a>
  <div className="mr-sm-6">
      <ul className="nav">
          <li className="nav-item mr-sm-3"><a className="aa" href=""><Facebook fontSize="large" /> </a></li>
          <li className="nav-item mr-sm-3"><a className="aa" href=""><Instagram fontSize="large" /></a> </li>
          <li className="nav-item mr-sm-3"><a className="aa" href=""><Email fontSize="large" /></a></li>
      </ul>
  </div>
  <div className="mr-sm-2">
      <ul className="nav">
          <li className="nav-item mr-sm-2">Usuario</li>
          <li className="nav-item mr-sm-2"><Person fontSize="large"/></li>
      </ul>
  </div>
</nav>

    );
}

export default NavBar;