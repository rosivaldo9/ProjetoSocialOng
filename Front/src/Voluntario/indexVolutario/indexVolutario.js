import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import './index.css'



export default class indexPA extends Component {

    state = {
        Voluntario: [], //dados da tabela
        VoluntarioInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1           //pagina inicial
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadVoluntario();
    }

    loadVoluntario = async (page = 1) => {
        const response = await api.get(`/Voluntario?page=${page}`); //buscar dos dados no banco
        const { docs, ...VoluntarioInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Voluntario: docs, VoluntarioInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadVoluntario(pageNumber);
    }
    nexPage = () => {
        const { page, VoluntarioInfo } = this.state;
        if (page === VoluntarioInfo.pages) return;

        const pageNumber = page + 1;
        this.loadVoluntario(pageNumber);
    }
    render() {
        const { Voluntario, VoluntarioInfo, page } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (

            <div className="usuario-list">
                <table className="table table-striped">
                    <thead>
                        <tr className="bg-success">
                            <th>Nome</th>
                            <th>Detalhes</th>
                            <th>Deleta</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                            {this.state.Voluntario.map(Voluntario => ( //mapeamento do Voluntario
                                <tr key={Voluntario._id} >
                                
                                    <td>{Voluntario.nome}</td>
                                    <td> <Link to={`/page14/${Voluntario._id}`}>Acessar</Link></td>
                                    <td>Deletar</td>
                                    </tr>
                            ))}

                        
                    </tbody>
                </table>

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button className="waves-effect waves-light" disabled={page === VoluntarioInfo.page} onClick={this.nexPage}>Proximo</button>
                </div>
            </div>


        );
    }
}
