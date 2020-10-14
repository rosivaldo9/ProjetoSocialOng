import React from 'react';
import Header from '../Educacao/header'
import InsertTurma from '../Turma/insertTurma'
import DeleteTurma from '../Turma/deleteTurma'
import DetailsTurma from '../Turma/detailsTurma'
import UpdateTurma from '../Turma/updateTurma'
import InsertFrequencia from '../Frequencia/insertFrequencia'
import UpdateFrequencia from '../Frequencia/updateFrequencia'




import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Index = () => (
    <div>
        <Router>
            <header>
                <Header />
            </header>

            <section>
                <Switch>
                    <Route path='/profile/educacao/cadastro-frequencia/:id' component={InsertFrequencia} />
                    <Route path='/profile/educacao/update-frequencia/:id' component={UpdateFrequencia} />

                    <Route path='/profile/educacao/cadastro-turma' component={InsertTurma} />
                    <Route path='/profile/educacao/detalhes-turma/:id' component={DetailsTurma} />
                    <Route path='/profile/educacao/update-turma/:id' component={UpdateTurma} />
                    <Route path='/profile/educacao/deletar-turma/:id' component={DeleteTurma} />
                </Switch>
            </section>
        </Router>
    </div>
)


export default Index