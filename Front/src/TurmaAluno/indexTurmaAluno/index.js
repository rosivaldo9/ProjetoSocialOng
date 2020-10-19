import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/service';//import url base

import Tabela from './tabela'


class IndexTurmaAluno extends Component {

    constructor() {
        super()
        this.state = {
            Turmas: []
        }
    }

    async loadTurmas() {
        const response = await api.get(`/Turma`); //buscar dos dados no banco
        const { docs: turmas, ...info } = response.data
        this.setState({
            Turmas: turmas
        })
    }

    componentDidMount(){
        this.loadTurmas()
    }

    render() {
        return (
            <div>
                <Tabela rows={filtro(this.state.Turmas)} />
            </div>
        )
    }
}

function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["nome"] = <Link to={`/profile/educacao/update-turma-aluno/${props[i]["_id"]}`}>{props[i]["nome"]}</Link>
    }
    return t;
}

export default IndexTurmaAluno;