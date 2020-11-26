

import React, { Component } from 'react'
import './style.css'
import { People } from '@material-ui/icons';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Index from '../pages/index';
import IndexServidor from '../Servidor/index';
import IndexVolutario from '../Voluntario/index';
import IndexPadrinho from '../Padrinho/index';
import Despesa from '../Despesa/index';
import Receita from '../Receita/index';
import Educacao from '../Educacao/index';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class SideBar extends Component {

  render() {
    return (
      <div className="container-fluid t1">
        <Router>
          <div className="row">
            <div className="col-2 m ">
              <div className="gbutões sidebar">
                <Link to="/profile/publicoatendido" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" /> Público Atendido</Link>
                <Link to="/profile/servidor" className="list-group-item list-group-item-action  but aa"><People className="material-icons" fontSize="large" /> Servidor</Link>
                <Link to="/profile/voluntario" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Voluntário</Link>
                <Link to="/profile/padrinho" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Padrinhos</Link>
                <Link className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Parceiros</Link>
                <Link to="/profile/despesa" className="list-group-item list-group-item-action but aa"><MonetizationOnIcon className="material-icons" fontSize="large" />Despesas</Link>
                <Link to="/profile/receita" className="list-group-item list-group-item-action but aa"><MonetizationOnIcon className="material-icons" fontSize="large" />Receita</Link>
                <Link to="/profile/educacao" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Educaçao</Link>
              </div>
            </div>
            <div className="col-2  "></div>
            <div className="col-lg-10 main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="container-fluid">
                      <Switch>
                        <Route path="/profile/publicoatendido" component={Index} />
                        <Route path="/profile/servidor" component={IndexServidor} />
                        <Route path="/profile/voluntario" component={IndexVolutario} />
                        <Route path="/profile/padrinho" component={IndexPadrinho} />
                        <Route path="/profile/despesa" component={Despesa} />
                        <Route path="/profile/receita" component={Receita} />
                        <Route path="/profile/educacao" component={Educacao} />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div >

    );
  }
}



