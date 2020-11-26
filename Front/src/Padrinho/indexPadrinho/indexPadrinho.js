import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import Tabela from './tabela'
import './index.css'



export default class indexPadrinho extends Component {

    state = {
       Padrinho: [], //dados da tabela
       PadrinhoInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1           //pagina inicial
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadPadrinho();
    }

    loadPadrinho = async (page = 1) => {
        const response = await api.get(`/Padrinho?page=${page}`); //buscar dos dados no banco
        const { docs, ...PadrinhoInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({Padrinho: docs,PadrinhoInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render() {
        const {Padrinho} = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <>
                <h2 className="text-center">Lista de Padrinhos</h2>
                <Tabela rows={filtro(Padrinho)}/>
            </>
        );
    }
}

function filtro (props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/profile/padrinho/detalhes/${props[i]["_id"]}`}>Detalhes</Link>
    }
    return t;
}
