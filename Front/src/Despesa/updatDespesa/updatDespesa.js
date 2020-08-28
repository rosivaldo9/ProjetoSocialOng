import React, { Component } from 'react';
import './update.css';
import { Redirect } from "react-router-dom";
import api from '../../service/service';

class EditarDespesa extends Component {
    constructor(props) {
        super(props);


        this.state = {
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
            },
            redirect: false,
        }
    }

    //metodos que executa junto com a aplicação
    async componentDidMount() {
        const { id } = this.props.match.params; //buscar parametros
        const response = await api.get(`/Padrinho/${id}`); //busca do registro
        this.setState({ Padrinho: response.data });  // atualizando estado com dados do registro 
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
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
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        
                                        value={this.state.Padrinho.nome}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-sm-5">
                                <label  htmlFor="dataNascimento">Data Nascimento:</label>
                                    <input
                                        className="form-control config-input"
                                        type="Date"
                                        id="dataNascimento"
                                        name="dataNascimento"
                                       
                                        value={this.state.Padrinho.dataNascimento}
                                        onChange={this.handleInputChange} />
                                </div>
                                </div>
                               
                            <h3 align="center">Endereço</h3>

                            <div className="form-row">
                               <div className="form-group col-sm-3">
                                <label  htmlFor="rua">Rua:</label>
                                    <input
                                        className="form-control config-input"
                                        type="text"
                                        id="rua"
                                        name="rua"
                                       
                                        value={this.state.Padrinho.rua}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-sm-2">
                                <label htmlFor="numero">Numero:</label>
                                    <select
                                        className="form-control config-input"
                                        type="text"
                                        id="numero"
                                        name="numero"
                                       
                                        value={this.state.Padrinho.numero}
                                        onChange={this.handleInputChange}>
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
                                        type="text"
                                        id="bairro"
                                        name="bairro"
                                       
                                        value={this.state.Padrinho.bairro}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-sm-4">
                                <label htmlFor="estado">CNPJ:</label>
                                    <input
                                        className="form-control config-input"
                                        type="text"
                                        id="estado"
                                        name="estado"
                                       
                                        value={this.state.Padrinho.estado}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                  <label  htmlFor="cep">Cep:</label>
                                     <input
                                        className="form-control config-input"
                                        type="text"
                                        id="cep"
                                        name="cep"
                                       
                                        value={this.state.Padrinho.cep}
                                        onChange={this.handleInputChange} />
                                </div>
                            


                                
                                <div className="form-group col-sm-3">
                                <label htmlFor="celular">Celular:</label>
                                    <input
                                        className="form-control config-input"
                                        type="text"
                                        id="celular"
                                        name="celular"
                                        value={this.state.Padrinho.celular}
                                        onChange={this.handleInputChange} />
                                </div>
                              
                                <div className="form-group col-sm-6">
                                <label htmlFor="email">Email:</label>
                                    <textarea
                                    rows=""
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        name="email"
                                       
                                        value={this.state.Padrinho.email}
                                        onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="estado">Estado:</label>
                                    <textarea
                                    rows=""
                                        className="form-control"
                                        type="text"
                                        id="estado"
                                        name="estado"
                                       
                                        value={this.state.Padrinho.estado}
                                        onChange={this.handleInputChange} />
                            </div>
                            
                        
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg float-right">Cadastrar</button>
                        </div>
                      
                        </div>


                
                </fieldset>
            </form>
            )
        }
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Padrinho: {...prevState.Padrinho, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        const {id} = this.props.match.params;
        fetch(`http://localhost:3003/sistema/Padrinho/${id}`, 
            {
            method: "put",
            body: JSON.stringify(this.state.Padrinho),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {     //vereficar os dados
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
        event.preventDefault();
    }



}

export default EditarDespesa;