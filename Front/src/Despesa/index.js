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
              <Route path="/page26" component={Insert} />
              <Route path="/page27" component={Lista} />
              <Route path="/page28/:id" component={Detalhes} />
              <Route path="/page29/:id" component={Editar} />
              <Route path="/page30/:id" component={Deletar} />
              <Route path="/page20" component={Relatorio}/>
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}





