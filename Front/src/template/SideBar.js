

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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class SideBar extends Component {

  render() {


    return (
      <div className="container-fluid t1">
        <Router>
          <div className="row">
            <div className="col-lg-2 m ">
              <div className="gbutões sidebar">
                <Link to="/page1"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" /> Público Atendido</a></Link>
                <Link to="/page7"><a href="#" className="list-group-item list-group-item-action  but aa"><People className="material-icons" fontSize="large" /> Servidor</a></Link>
                <Link to="/page13"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Voluntario</a></Link>
                <Link to="/page20"><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Padrinhos</a></Link>
                <Link><a href="#" className="list-group-item list-group-item-action but aa"><People className="material-icons" fontSize="large" />Parceiros</a></Link>
                <Link to="/finaceiro"><a href="#" className="list-group-item list-group-item-action but aa"><MonetizationOnIcon className="material-icons" fontSize="large" />Financeiro</a></Link>
                <Link to="/Receita"><a href="#" className="list-group-item list-group-item-action but aa"><MonetizationOnIcon className="material-icons" fontSize="large" />Receita</a></Link>
              </div>
            </div>
            <div className="col-lg-2  "></div>
            <div className="col-lg-10 main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="container-fluid">
                    <Switch>

                  
                          <Route  path="/page1" component={Index} />
                          <Route  path="/page7" component={IndexServidor} />
                          <Route  path="/page13" component={IndexVolutario} />
                          <Route  path="/page20" component={IndexPadrinho} />
                          <Route  path="/finaceiro" component={Finaceiro} />
                          <Route  path="/Receita" component={Receita} />
  
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



