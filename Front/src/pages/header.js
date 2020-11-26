import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../template/style.css';

export default class header extends Component {
  render () {
    return (
      <ul className="nav nav-pills nav-fill head">
        <li className="nav-item">
          <Link to="/profile/publicoatendido/lista">  <a className="nav-link botIndex" href="#">Lista</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/profile/publicoatendido/cadastro">  <a className="nav-link botIndex" href="#">Cadastro</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/profile/publicoatendido/relatorios"> <a className="nav-link botIndex" href="#">Relatorios</a></Link>
        </li>
      </ul>
    )
  }
}