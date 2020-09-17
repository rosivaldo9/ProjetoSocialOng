import React, { Component } from 'react';
import Header from '../Voluntario/header';
import Insert from '../Voluntario/insertVolutario/insertVolutario';
import Lista from '../Voluntario/indexVolutario/indexVolutario';
import Detalhes from '../Voluntario/detailsVolutario/detailsVolutario';
import Editar from '../Voluntario/updatVolutario/updatVolutario';
import Deletar from '../Voluntario/deleteVolutario/deleteVolutario'


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
              <Route path="/page12" component={Insert} />
              <Route path="/page17" component={Lista} />
              <Route path="/page14/:id" component={Detalhes} />
              <Route path="/page15/:id" component={Editar} />
              <Route path="/page16/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


