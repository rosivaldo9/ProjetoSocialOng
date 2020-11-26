import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import Tabela from './tabela'
import './index.css'

export default class indexServidor extends Component {

    state = {
        Servidor: [], //dados da tabela
        ServidorInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1           //pagina inicial
    };
    componentDidMount () { // metodo executa automatico quando inicia a aplicação
        this.loadServidor();
    }

    loadServidor = async (page = 1) => {
        const response = await api.get(`/Servidor?page=${page}`); //buscar dos dados no banco
        const { docs, ...ServidorInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Servidor: docs, ServidorInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }
    render () {
        const { Servidor } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <>
           <h4 className="text-center">Lista de Servidores</h4>
           <Tabela rows={filtro(Servidor)}/>
           </>
        );
    }
}

function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/profile/servidor/detalhes/${props[i]["_id"]}`}>Detalhes</Link>
    }
    return t;
}
