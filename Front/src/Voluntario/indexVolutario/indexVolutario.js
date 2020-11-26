import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import Tabela from './tabela';
import './index.css'

export default class indexPA extends Component {
    state = {
        Voluntario: [], //dados da tabela
        VoluntarioInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1           //pagina inicial
    };
    componentDidMount () { // metodo executa automatico quando inicia a aplicação
        this.loadVoluntario();
    }

    loadVoluntario = async (page = 1) => {
        const response = await api.get(`/Voluntario?page=${page}`); //buscar dos dados no banco
        const { docs, ...VoluntarioInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Voluntario: docs, VoluntarioInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render () {
        const { Voluntario } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <>
                <h4 className="text-center">Lista de Volutários</h4>
                <Tabela rows={filtro(Voluntario)}/>
            </>
        );
    }
}

function filtro (props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/profile/voluntario/detalhes/${props[i]["_id"]}`}>Detalhes</Link>
    }
    return t;
}
