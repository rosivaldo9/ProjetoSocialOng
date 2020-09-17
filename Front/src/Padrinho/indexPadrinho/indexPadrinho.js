import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
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

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadPadrinho(pageNumber);
    }
    nexPage = () => {
        const { page,PadrinhoInfo } = this.state;
        if (page ===PadrinhoInfo.pages) return;

        const pageNumber = page + 1;
        this.loadPadrinho(pageNumber);
    }
    render() {
        const {Padrinho,PadrinhoInfo, page } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
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
                        
                            {this.state.Padrinho.map(Padrinho=> ( //mapeamento do Padrinho
                                <tr key={Padrinho._id} >
                                
                                    <td>{Padrinho.nome}</td>
                                    <td> <Link to={`/page23/${Padrinho._id}`}>Acessar</Link></td>
                                    <td>Deletar</td>
                                    </tr>
                            ))}
           
                    </tbody>
                </table>

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button className="waves-effect waves-light" disabled={page ===PadrinhoInfo.page} onClick={this.nexPage}>Proximo</button>
                </div>
            </div>


        );
    }
}
