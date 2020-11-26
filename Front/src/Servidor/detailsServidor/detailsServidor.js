import React, { Component } from 'react';
import {api, STATIC_SERVER_ADDRESS} from '../../service/service';
import { Link } from "react-router-dom";
import './detail.css';




export default class DetailsServidor extends Component {
    state = {
        Servidor: {
            nome: "",
            foto: "",
            dataNascimento: "",
            sexo: "",
            raca: "",
            titulo: 0,
            secao: "",
            zona: "",
            resevista: "",
            naturalidade: "",
            rg: 0,
            ssp: "",
            dataExpedicao: "",
            cpf: 0,
            estado: "",
            pai: "",
            mae: "",
            estadoCivil: "",
            grauInstrucao: "",
            cursoHabilitacao: "",
            funcao: "",
            rua: "",
            numero: "",
            bairro: "",
            celular: "",
            email: ""


        }

    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/Servidor/${id}`);  // busca da lista no banco de dados
        this.setState({ Servidor: response.data });         //setando dados do Servidor com dados da lista
    }

    render() {
        const { Servidor } = this.state;  // Servidor no seu estado atual

        return (

            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Detalhes Usuario</legend>
                    <div className="card textForm">
                        <h3 align="center">Dados Pessoais</h3>
                        <div className="card-body">
                            <div className="container col-md-4 col-sm-4 float-right">
                                <img className="d-flex justify-content-center mx-auto"
                                    id="img" src={STATIC_SERVER_ADDRESS + this.state.Servidor.foto}
                                    width="170" height="250" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-5">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.nome} />
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="dataNascimento">Data Nascimento:</label>
                                    <input
                                        type="date"
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.dataNascimento.substring(0,10)} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="sexo">Sexo:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.sexo} />
                                </div>

                                <div className="form-group col-sm-4">
                                    <label htmlFor="ssp">SSP:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.ssp} />
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="rg">RG:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.rg} />
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="cpf">CPF:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.cpf} />

                                </div>

                                <div className="form-group col-sm-3">
                                    <label htmlFor="data-expedicao">Data Expedição:</label>

                                    <input
                                        type="date"
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.dataExpedicao} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="raca">Raça:</label>

                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.raca} />

                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="estado">Estado:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.estado}
                                    />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="naturalidade">Naturalidade:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.naturalidade}
                                    />
                                </div>
                            </div>

                            <h3 align="center">Escolaridade</h3>

                            <div className="form-row">
                                <div className="form-group col-sm-5">
                                    <label htmlFor="titulo">Titulo:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.titulo} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="secao">Seção:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.secao} />

                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="zona">Zona:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.zona}
                                    />
                                </div>
                            </div>
                            <h3 align="center">Endereço</h3>

                            <div className="form-row">
                                <div className="form-group col-sm-4">
                                    <label htmlFor="rua">Rua:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.rua} />
                                </div>
                                <div className="form-group col-sm-2">
                                    <label htmlFor="numero">Numero:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.numero} />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="bairro">Bairro:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.bairro} />
                                </div>
                            </div>
                            <h3 align="center">Responsavel</h3>

                            <div className="form-row">
                                <div className="form-group col-sm-5">
                                    <label htmlFor="grau">Grau de Instrução:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.grauInstrucao} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="curso">Curso de Habilitação:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.cursoHabilitacao} />
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="funcao">Função:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.funcao} />
                                </div>


                                <div className="form-group col-sm-4">
                                    <label htmlFor="escolaridade">Pai:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.pai} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="profissao">Mãe:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.mae}
                                    />
                                </div>
                                <div className="form-group col-sm-2">
                                    <label htmlFor="rendaFamiliar">Email:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.email} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="celular">Celular:</label>
                                    <input
                                        className="form-control config-input"
                                        disabled="true"
                                        value={Servidor.celular} />
                                </div>

                                <div className="form-group col-md-3 col-sm-3">
                                    <label htmlFor="estado-civil">Estado Civil:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        disabled="true"
                                        value={Servidor.estadoCivil} />
                                </div>

                            </div>
                            <Link to={`/profile/servidor/editar/${Servidor._id}`} className="btn btn-warning btn-lg mr-2">Editar</Link>
                            <Link to={`/profile/servidor/remover/${Servidor._id}`} className="btn btn-danger btn-lg">Remover</Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}