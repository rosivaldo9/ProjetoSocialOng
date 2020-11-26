import React, { Component } from 'react';
import Header from '../pages/header';
import IndexPA from '../pages/indexPA/indexPAT';
import CadastroPA from '../pages/insertPA/insertPA';
import DetailsPA from '../pages/detailsPA/detailsPa';
import UpdatePA from './updatPA/updatPA';
import DeletePA from './deletePA/deletePA';
import Relatorios  from './Relatorios/graficos'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class index extends Component {
  render() {
    return (

      <div>
        <Router>
          <header>
            <Header />
          </header>

          <section>
            <Switch>
              <Route path="/profile/publicoatendido/lista" component={IndexPA} />
              <Route path="/profile/publicoatendido/cadastro" component={CadastroPA} />
              <Route path='/profile/publicoatendido/detalhes/:id' component={DetailsPA} />
              <Route path='/profile/publicoatendido/editar/:id' component={UpdatePA} />
              <Route path='/profile/publicoatendido/remover/:id' component={DeletePA} />
              <Route path='/profile/publicoatendido/relatorios' component={Relatorios} />
            </Switch>
          </section>

        </Router>
      </div>
    );
  }
}


