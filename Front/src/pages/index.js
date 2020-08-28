import React, { Component } from 'react';
import Header from '../pages/header';
import IndexPA from '../pages/indexPA/indexPAT';
import CadastroPA from '../pages/insertPA/insertPA';
import DetailsPA from '../pages/detailsPA/detailsPa';
import UpdatePA from './updatPA/updatPA';
import DeletePA from './deletePA/deletePA';
import Relatorios  from './Relatorios/graficos'

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
              <Route path="/page2" component={IndexPA} />
              <Route path="/page3" component={CadastroPA} />
              <Route path='/detalhes/:id' component={DetailsPA} />
              <Route path='/page5/:id' component={UpdatePA} />
              <Route path='/page6/:id' component={DeletePA} />
              <Route path='/relatorios' component={Relatorios} />
            </Switch>
          </section>

        </Router>
      </div>
    );
  }
}


