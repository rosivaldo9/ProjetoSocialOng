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
              <Route path="/page21" component={Insert} />
              <Route path="/page22" component={Lista} />
              <Route path="/page23/:id" component={Detalhes} />
              <Route path="/page24/:id" component={Editar} />
              <Route path="/page25/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


