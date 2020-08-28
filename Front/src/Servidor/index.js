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
              <Route path="/page6" component={Insert} />
              <Route path="/page8" component={Lista} />
              <Route path="/page9/:id" component={Detalhes} />
              <Route path="/page10/:id" component={Editar} />
              <Route path="/page11/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


