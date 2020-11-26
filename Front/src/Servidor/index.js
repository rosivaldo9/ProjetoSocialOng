import React, { Component } from 'react';
import Header from '../Servidor/header';
import Insert from '../Servidor/insertServidor/insertServidor';
import Lista from '../Servidor/indexServidor/indexServidor';
import Detalhes from '../Servidor/detailsServidor/detailsServidor';
import Editar from '../Servidor/updatServidor/updatServidor';
import Deletar from '../Servidor/deleteServidor/deleteServidor'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
              <Route path="/profile/servidor/cadastro" component={Insert} />
              <Route path="/profile/servidor/lista" component={Lista} />
              <Route path="/profile/servidor/detalhes/:id" component={Detalhes} />
              <Route path="/profile/servidor/editar/:id" component={Editar} />
              <Route path="/profile/servidor/remover/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


