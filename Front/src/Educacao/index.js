import React from 'react';
import Header from '../Educacao/header'
import IndexTurma from '../Turma/indexTurma'
import InsertTurma from '../Turma/insertTurma'
import DeleteTurma from '../Turma/deleteTurma'
import DetailsTurma from '../Turma/detailsTurma'
import UpdateTurma from '../Turma/updateTurma/'
import IndexTurmaAluno from '../TurmaAluno/indexTurmaAluno'
import UpdateTurmaAluno from '../TurmaAluno/updateTurmaAluno'
import IndexFrequencia from '../Frequencia/indexFrequencia'
import DetalhesFrequencia from '../Frequencia/detailFrequencia'
import CadastroFrequencia from '../Frequencia/insertFrequencia'
import InsertFrequencia from '../Frequencia/insertFrequencia/insert'
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
                    <Route path='/profile/educacao/adicionar-alunos/' component={IndexTurmaAluno} />
                    <Route path='/profile/educacao/update-turma-aluno/:id' component={UpdateTurmaAluno} />

                    <Route path='/profile/educacao/detalhes-frequencia' component={DetalhesFrequencia} />
                    <Route path='/profile/educacao/frequencia' component={IndexFrequencia} />
                    <Route exact path='/profile/educacao/cadastro-frequencia' component={CadastroFrequencia} />
                    <Route path='/profile/educacao/cadastro-frequencia/:id' component={InsertFrequencia} />
                    <Route path='/profile/educacao/update-frequencia' component={UpdateFrequencia} />

                    <Route path='/profile/educacao/turmas' component={IndexTurma} />
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