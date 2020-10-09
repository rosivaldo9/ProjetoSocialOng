

import React, { Component } from 'react'
import './style.css'
import { People } from '@material-ui/icons';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Index from '../pages/index';
import IndexServidor from '../Servidor/index';
import IndexVolutario from '../Voluntario/index';
import IndexPadrinho from '../Padrinho/index';
import Finaceiro from '../Despesa/index';
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
                <Link to="/profile/page1"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" /> Público Atendido</a></Link>
                <Link to="/profile/page7"><a href="#" className="list-group-item list-group-item-action  but aa"><People className="material-icons" fontSize="large" /> Servidor</a></Link>
                <Link to="/profile/page13"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Voluntario</a></Link>
                <Link to="/profile/page20"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Padrinhos</a></Link>
                <Link><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Parceiros</a></Link>
                <Link to="/profile/finaceiro"><a href="#" className="list-group-item list-group-item-action but aa"><MonetizationOnIcon className="material-icons" fontSize="large" />Financeiro</a></Link>
                <Link to="/profile/Receita"><a href="#" className="list-group-item list-group-item-action but aa"><MonetizationOnIcon className="material-icons" fontSize="large" />Receita</a></Link>
                <Link to="/profile/educacao"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Educaçao</a></Link>

              </div>
            </div>
            <div className="col-2  "></div>
            <div className="col-lg-10 main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="container-fluid">
                      <Switch>
                        <Route path="/profile/page1" component={Index} />
                        <Route path="/profile/page7" component={IndexServidor} />
                        <Route path="/profile/page13" component={IndexVolutario} />
                        <Route path="/profile/page20" component={IndexPadrinho} />
                        <Route path="/profile/finaceiro" component={Finaceiro} />
                        <Route path="/profile/Receita" component={Receita} />
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



