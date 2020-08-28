import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import './index.css'



export default class indexServidor extends Component {

    state = {
        Servidor: [], //dados da tabela
        ServidorInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1           //pagina inicial
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadServidor();
    }

    loadServidor = async (page = 1) => {
        const response = await api.get(`/Servidor?page=${page}`); //buscar dos dados no banco
        const { docs, ...ServidorInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Servidor: docs, ServidorInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadServidor(pageNumber);
    }
    nexPage = () => {
        const { page, ServidorInfo } = this.state;
        if (page === ServidorInfo.pages) return;

        const pageNumber = page + 1;
        this.loadServidor(pageNumber);
    }
    render() {
        const { Servidor, ServidorInfo, page } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
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
                        
                            {this.state.Servidor.map(Servidor => ( //mapeamento do Servidor
                                <tr key={Servidor._id} >
                                
                                    <td>{Servidor.nome}</td>
                                    <td> <Link to={`/page9/${Servidor._id}`}>Acessar</Link></td>
                                    <td>Deletar</td>
                                    </tr>
                            ))}

                        
                    </tbody>
                </table>

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button className="waves-effect waves-light" disabled={page === ServidorInfo.page} onClick={this.nexPage}>Proximo</button>
                </div>
            </div>


        );
    }
}
