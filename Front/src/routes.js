import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexPA from './pages/indexPA/indexPA';

const Routes = () =>(

    <BrowserRouter>
    <Switch>
        <Route exact path ='/' component={IndexPA} /> 
     </Switch>
    </BrowserRouter>

);
export default Routes;