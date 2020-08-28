import React, { Component } from 'react';
import Header from '../Despesa/header';
import Insert from './insertReceita/insertReceita';
import Lista from './indexReceita/indexReceita';
import Detalhes from './detailsReceita/detailsReceita';
import Editar from './updatReceita/updatReceita';
import Deletar from './deleteReceita/deleteReceita';



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
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}





