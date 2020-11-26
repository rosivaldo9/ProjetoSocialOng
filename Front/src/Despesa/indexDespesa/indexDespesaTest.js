import React, { Component } from 'react';
import Moment from 'react-moment';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import Data from './data';

export default class indexDespesa extends Component {

    state = {
        Despesa: [], //dados da tabela
        DespesaInfo: {},  //informações necessarias para paginação e apresentação dos dados
    };
    componentDidMount () { // metodo executa automatico quando inicia a aplicação
        this.loadDespesa();
    }

    loadDespesa = async () => {
        const response = await api.get(`/Despesa`); //buscar dos dados no banco
        const { docs, ...DespesaInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Despesa: docs, DespesaInfo }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render () {
        const { Despesa } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <div>
                <Data row={filtro(Despesa)} />
            </div>
        );
    }
}

function filtro (props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/profile/despesa/detalhes/${props[i]["_id"]}`}>Detalhes</Link>
        t[i]["dataa"] = <Moment utc='GMT-3' format="DD/MM/YYYY" date={props[i]["data"]}></Moment>
        t[i]["valorr"] = props[i]["valor"] + "  R$ ";
    }



    return t;
}






function btn (props) {
    var t = [];
    for (var i = 0; i < props.length; i++) {
        t[i].push('detalhes');
    }
    console.log(props);
    return props;
}







