import React, { Component } from 'react';
import Header from './header';
import Insert from './insertReceita/insertReceita';
import Lista from './indexReceita/indexReceita';
import Detalhes from './detailsReceita/detailsReceita';
import Editar from './updatReceita/updatReceita';
import Deletar from './deleteReceita/deleteReceita';

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
              <Route path="/profile/receita/cadastro" component={Insert} />
              <Route path="/profile/receita/lista" component={Lista} />
              <Route path="/profile/receita/detalhes/:id" component={Detalhes} />
              <Route path="/profile/receita/editar/:id" component={Editar} />
              <Route path="/profile/receita/remover/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}





