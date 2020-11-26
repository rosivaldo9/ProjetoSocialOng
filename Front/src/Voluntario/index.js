import React, { Component } from 'react';
import Header from '../Voluntario/header';
import Insert from '../Voluntario/insertVolutario/insertVolutario';
import Lista from '../Voluntario/indexVolutario/indexVolutario';
import Detalhes from '../Voluntario/detailsVolutario/detailsVolutario';
import Editar from '../Voluntario/updatVolutario/updatVolutario';
import Deletar from '../Voluntario/deleteVolutario/deleteVolutario'

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
              <Route path="/profile/voluntario/cadastro" component={Insert} />
              <Route path="/profile/voluntario/lista" component={Lista} />
              <Route path="/profile/voluntario/detalhes/:id" component={Detalhes} />
              <Route path="/profile/voluntario/editar/:id" component={Editar} />
              <Route path="/profile/voluntario/remover/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


