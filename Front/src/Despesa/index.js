import React, { Component } from 'react';
import Header from '../Despesa/header';
import Insert from '../Despesa/insertDespesa/insertDespesa';
import Lista from '../Despesa/indexDespesa/indexDespesaTest';
import Detalhes from '../Despesa/detailsDespesa/detailsDespesa';
import Editar from '../Despesa/updatDespesa/updatDespesa';
import Deletar from '../Despesa/deleteDespesa/deleteDespesa';
import Relatorio from "../Despesa/relatorioDespesa";

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
              <Route path="/profile/despesa/cadastro" component={Insert} />
              <Route path="/profile/despesa/lista" component={Lista} />
              <Route path="/profile/despesa/detalhes/:id" component={Detalhes} />
              <Route path="/profile/despesa/editar/:id" component={Editar} />
              <Route path="/profile/despesa/remover/:id" component={Deletar} />
              <Route path="/profile/despesa/relatorios" component={Relatorio}/>
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}





