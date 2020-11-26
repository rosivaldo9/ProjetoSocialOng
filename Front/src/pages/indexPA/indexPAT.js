import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import './index.css'
import Tabela from './tabela'

export default class indexPA extends Component {

    state = {
        publicoAtendido: [], //dados da tabela
        publicoAtendidoInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1           //pagina inicial
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadPublicoAtendido();
    }

    loadPublicoAtendido = async (page = 1) => {
        const response = await api.get(`/CadastroPublico?page=${page}`); //buscar dos dados no banco
        const { docs, ...publicoAtendidoInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ publicoAtendido: docs, publicoAtendidoInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render() {
        const { publicoAtendido } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <div>
                <h4>Lista de Público Atendido</h4>
                <Tabela rows={filtro(publicoAtendido)} />
            </div>
        );
    }
}


function filtro(props) {

    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/profile/publicoatendido/detalhes/${props[i]["_id"]}`}>Detalhes</Link>
    }
    return t;
}
