import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexPadrinho/index.css';




export default class DetailsPadrinho extends Component {
    state = {
        Padrinho: {
            nome: "",
            dataNascimento: Date,
            cnpj: "",
            estado: "",
           cep: 0,
            rua: "",
            numero: "",
            bairro: "",
            celular: "",
            email: ""
        }



    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/Padrinho/${id}`);  // busca da lista no banco de dados
        this.setState({ Padrinho: response.data });         //setando dados do Padrinho com dados da lista
    }

    render() {
        const { Padrinho } = this.state;  // Padrinho no seu estado atual

        return (

            <form >
            <fieldset>
            <legend>Criar Padrinho</legend>
                <div className="card textForm">
                    <h3 align="center">Dados Pessoais</h3>
                    <div className="card-body">

                        <div className="form-row">

                            <div className="form-group col-sm-7">
                            <label htmlFor="nome">Nome</label>
                                <input
                                className="form-control config-input"
                                disabled="true"
                                value={Padrinho.nome} />
                            </div>

                            <div className="form-group col-sm-5">
                            <label  htmlFor="dataNascimento">Data Nascimento:</label>
                                <input
                                    className="form-control config-input"
                                    disabled="true"
                                    value={Padrinho.dataNascimento} />
                            </div>
                            </div>
                           
                        <h3 align="center">Endereço</h3>

                        <div className="form-row">

                           <div className="form-group col-sm-3">
                            <label  htmlFor="rua">Rua:</label>
                                <input
                                    className="form-control config-input"
                                    disabled="true"
                                    value={Padrinho.rua}/>
                            </div>

                            <div className="form-group col-sm-2">
                            <label htmlFor="numero">Numero:</label>
                                <select
                                    className="form-control config-input"
                                    disabled="true"
                                    value={Padrinho.numero}>
                                    <option></option>
                                    <option>Negro</option>
                                    <option>Branco</option>
                                    <option>Parda</option>
                                    <option>Preto</option>
                                </select>
                            </div>

                            <div className="form-group col-sm-3">
                            <label  htmlFor="bairro">Bairro:</label>
                                <input
                                    className="form-control config-input"
                                   disabled="true"
                                    value={Padrinho.bairro} />
                            </div>

                            <div className="form-group col-sm-4">
                            <label htmlFor="estado">CNPJ:</label>
                                <input
                                    className="form-control config-input"
                                   disabled="true"
                                    value={Padrinho.estado} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-sm-3">
                              <label  htmlFor="cep">Cep:</label>
                                 <input
                                    className="form-control config-input"
                                   disabled="true"
                                    value={Padrinho.cep}/>
                            </div>
                            
                            <div className="form-group col-sm-3">
                            <label htmlFor="celular">Celular:</label>
                                <input
                                    className="form-control config-input"
                                    disabled="true"
                                    value={Padrinho.celular}/>
                            </div>
                          
                            <div className="form-group col-sm-6">
                            <label htmlFor="email">Email:</label>
                                <textarea
                                rows=""
                                className="form-control"
                                disabled="true"
                                value={Padrinho.email}/>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="estado">Estado:</label>
                                <textarea
                                rows=""
                                className="form-control"
                                 value={Padrinho.estado} />
                        </div>
                        
                    </div>
                    <Link to={`/profile/padrinho/editar/${Padrinho._id}`}><button type="button" className="btn btn-warning btn-lg mr-2">Editar</button></Link>
                    <Link to={`/profile/padrinho/remover/${Padrinho._id}`}><button  type="button" className="btn btn-danger btn-lg">Remover</button></Link>
                    </div>
                  
                    </div>


            
            </fieldset>
        </form>
       );
    }
}