import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/service';//import url base

import Tabela from './tabela'


class IndexTurma extends Component {

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
                <Link className="btn btn-lg btn-outline-primary my-4" to="/profile/educacao/cadastro-turma">Nova turma</Link>
                <Tabela rows={filtro(this.state.Turmas)} />
            </div>
        )
    }
}

function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["nome"] = <Link to={`/profile/educacao/detalhes-turma/${props[i]["_id"]}`}>{props[i]["nome"]}</Link>
        t[i]["deletar"] =<Link className="btn btn-outline-danger" to={`/profile/educacao/deletar-turma/${props[i]["_id"]}`}>Deletar</Link>
    }
    return t;
}

export default IndexTurma;