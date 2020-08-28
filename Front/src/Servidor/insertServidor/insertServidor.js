import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './insert.css';

class CriaServidor extends Component {
    constructor() {
        super();

        this.state = {
            Servidor: {
                nome: "",
                dataNascimento: Date,
                sexo: "",
                raca: "",
                titulo: "",
                secao: "",
                zona: "",
                resevista: "",
                naturalidade: "",
                rg: "",
                ssp: "",
                dataExpedicao: Date,
                cpf: "",
                estado: "",
                pai: "",
                mae: "",
                estadoCivil: "",
                grauInstrucao: "",
                funcao: "",
                rua: "",
                numero: "",
                bairro: "",
                celular: "",
                email: ""

            },
            redirect: false,
        }
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Cadastrar Servidor</legend>
                        <div className="card textForm">
                            <h3 align="center">Dados Pessoais</h3>
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            required
                                            value={this.state.Servidor.nome}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="dataNascimento">Data Nascimento</label>
                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="dataNascimento"
                                            name="dataNascimento"
                                            required
                                            value={this.state.Servidor.dataNascimento}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="sexo">Sexo</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="sexo"
                                            name="sexo"
                                            required
                                            value={this.state.Servidor.sexo}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-sm-4">
                                        <label htmlFor="ssp">SSP:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="ssp"
                                            name="ssp"
                                            required
                                            value={this.state.Servidor.ssp}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="rg">RG</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="rg"
                                            name="rg"
                                            minLength="13"
                                            maxLength="13"
                                            required
                                            value={this.state.Servidor.rg}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="cpf">CPF</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="cpf"
                                            name="cpf"
                                            minLength="11"
                                            maxLength="11"
                                            required
                                            value={this.state.Servidor.cpf}
                                            onChange={this.handleInputChange} />

                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label htmlFor="dataExpedicao">Data de Expedição</label>

                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="dataExpedicao"
                                            name="dataExpedicao"
                                            required
                                            value={this.state.Servidor.dataExpedicao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="raca">Raça</label>

                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="raca"
                                            name="raca"

                                            value={this.state.Servidor.raca}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Negro</option>
                                            <option>Branco</option>
                                            <option>Parda</option>
                                            <option>Preto</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="titulo">Título</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="titulo"
                                            name="titulo"
                                            minLength="12"
                                            maxLength="12"
                                            required
                                            value={this.state.Servidor.altura}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="naturalidade">Naturalidade</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="naturalidade"
                                            name="naturalidade"
                                            required
                                            value={this.state.Servidor.naturalidade}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="secao">Seção</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="secao"
                                            name="secao"
                                            minLength="4"
                                            maxLength="4"
                                            required
                                            value={this.state.Servidor.secao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="zona">Zona</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="zona"
                                            name="zona"
                                            minLength="3"
                                            maxLength="3"
                                            required
                                            value={this.state.Servidor.zona}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="resevista">Resevista</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="resevista"
                                            name="resevista"
                                            minLength="13"
                                            maxLength="13"
                                            required
                                            value={this.state.Servidor.resevista}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <h3 align="center">Filiação</h3>

                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="pai">Pai</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="pai"
                                            name="pai"
                                            required
                                            value={this.state.Servidor.pai}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="mae">Mãe</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="mae"
                                            name="mae"
                                            required
                                            value={this.state.Servidor.mae}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="funcao">Função</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="funcao"
                                            name="funcao"
                                            required
                                            value={this.state.Servidor.funcao}
                                            onChange={this.handleInputChange} />
                                    </div>


                                    <div className="form-group col-sm-4">
                                        <label htmlFor="estadoCivil">Estado Civil</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="estadoCivil"
                                            name="estadoCivil"
                                            required
                                            value={this.state.Servidor.estadoCivil}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Solteiro</option>
                                            <option>Casado</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="grauInstrucao">Grau de Intrução</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="grauInstrucao"
                                            name="grauInstrucao"
                                            required
                                            value={this.state.Servidor.grauInstrucao}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="cursoHabilitacao">Curso Habilitacão</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="cursoHabilitacao"
                                            name="cursoHabilitacao"
                                            required
                                            value={this.state.Servidor.cursoHabilitacao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <h3 align="center">Endereço</h3>

                                <div className="form-row">
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="rua">Rua:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="rua"
                                            name="rua"
                                            required
                                            value={this.state.Servidor.rua}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="numero">Numero</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="numero"
                                            name="numero"
                                            required
                                            value={this.state.Servidor.numero}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="bairro">Bairro</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="bairro"
                                            name="bairro"
                                            required
                                            value={this.state.Servidor.bairro}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="estado">Estado</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="estado"
                                            name="estado"
                                            required
                                            value={this.state.Servidor.estado}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="celular">Celular</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="celular"
                                            name="celular"
                                            required
                                            value={this.state.Servidor.celular}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="email"
                                            name="email"
                                            required
                                            value={this.state.Servidor.email}
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
            Servidor: { ...prevState.Servidor, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        fetch("http://localhost:3003/sistema/Servidor", {
            method: "post",
            body: JSON.stringify(this.state.Servidor),
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

export default CriaServidor;