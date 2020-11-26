import React, { Component } from 'react';
import Header from '../Padrinho/header';
import Insert from '../Padrinho/insertPadrinho/insertPadrinho';
import Lista from '../Padrinho/indexPadrinho/indexPadrinho';
import Detalhes from '../Padrinho/detailsPadrinho/detailsPadrinho';
import Editar from '../Padrinho/updatPadrinho/updatPadrinho';
import Deletar from '../Padrinho/deletePadrinho/deletePadrinho';


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
              <Route path="/profile/padrinho/cadastro" component={Insert} />
              <Route path="/profile/padrinho/lista" component={Lista} />
              <Route path="/profile/padrinho/detalhes/:id" component={Detalhes} />
              <Route path="/profile/padrinho/editar/:id" component={Editar} />
              <Route path="/profile/padrinho/remover/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


