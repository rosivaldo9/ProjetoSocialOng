import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './insert.css';
import { API_ADDRESS, STATIC_SERVER_ADDRESS } from '../../service/service'

class CriaPA extends Component {
    constructor() {

        super();

        this.state = {
            PublicoAtendido: {
                nome: "",
                dataNascimento: Date,
                sexo: "",
                raca: "",
                altura: 0,
                peso: 0,
                religiao: "",
                naturalidade: "",
                rg: "",
                cpf: "",
                escola: "",
                ano: "",
                anoAnterior: "",
                rua: "",
                numero: "",
                bairro: "",
                moraComQuem: "",
                nomeResponsavel: "",
                cpfResponsavel: 0, // TODO
                nis: 0,
                funcao: "",
                escolaridade: "",
                profissao: "",
                rendaFamiliar: "",
                contribuinte: "",
                observacao: ""

            },
            redirect: false,
            arquivoFoto: {},
            fotoPreview: STATIC_SERVER_ADDRESS + 'assets/perfil.png'
        }

    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />,
                <div className="alert alert-success aler" role="alert">
                    <p>Os dados foram salvos com sucesso</p>
                </div>
        } else {
            return (

                <form className="tituloForm" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Cadastro de Público Atendido</legend>
                        <div className="card textForm">
                            <h3 align="center">Dados Pessoais</h3>
                           
                            <div className="card-body">
                            <div className="container col-md-4 col-sm-4 float-right">
                                <img className="d-flex justify-content-center mx-auto" id="img" src={this.state.fotoPreview} width="170" height="250" />
                                <label className="d-flex justify-content-center mx-auto" id="foto-upload-label" for="foto-upload">
                                    Selecione um arquivo
                                        </label>
                                <input id="foto-upload" type="file" onChange={this.handleImageChange} />
                            </div>

                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="nome"
                                            name="nome"

                                            value={this.state.PublicoAtendido.nome}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="dataNascimento">Data Nascimento:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="dataNascimento"
                                            name="dataNascimento"

                                            value={this.state.PublicoAtendido.dataNascimento}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="sexo">Sexo:</label>
                                        <select
                                            className="form-control config-select"
                                            type="text"
                                            id="sexo"
                                            name="sexo"

                                            value={this.state.PublicoAtendido.sexo}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-sm-4">
                                        <label htmlFor="religiao">Religião:</label>
                                        <select
                                            className="form-control config-select"
                                            id="religiao"
                                            name="religiao"

                                            value={this.state.PublicoAtendido.religiao}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Católica</option>
                                            <option>Evangélica</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="rg">RG:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="rg"
                                            name="rg"
                                            // minLength="13"
                                            // maxLength="13"

                                            value={this.state.PublicoAtendido.rg}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="cpf">CPF:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="cpf"
                                            name="cpf"
                                            // minLength="11"
                                            // maxLength="11"

                                            value={this.state.PublicoAtendido.cpf}
                                            onChange={this.handleInputChange} />

                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label htmlFor="peso">Peso:</label>

                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="peso"
                                            name="peso"

                                            value={this.state.PublicoAtendido.peso}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="raca">Raça:</label>

                                        <select
                                            className="form-control config-select"
                                            type="text"
                                            id="raca"
                                            name="raca"

                                            value={this.state.PublicoAtendido.raca}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Negro</option>
                                            <option>Branco</option>
                                            <option>Parda</option>
                                            <option>Preto</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="altura">Altura:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="altura"
                                            name="altura"

                                            value={this.state.PublicoAtendido.altura}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="naturalidade">Naturalidade:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="naturalidade"
                                            name="naturalidade"

                                            value={this.state.PublicoAtendido.naturalidade}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <h3 align="center">Escolaridade</h3>

                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="escola">Escola:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="escola"
                                            name="escola"

                                            value={this.state.PublicoAtendido.escola}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="ano">Ano:</label>
                                        <select
                                            className="form-control config-select"
                                            type="text"
                                            id="ano"
                                            name="ano"

                                            value={this.state.PublicoAtendido.ano}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>1º Ano</option>
                                            <option>2º Ano</option>
                                            <option>3º Ano</option>
                                            <option>4º Ano</option>
                                            <option>5º Ano</option>
                                            <option>6º Ano</option>
                                            <option>7º Ano</option>
                                            <option>8º Ano</option>
                                            <option>9º Ano</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="anoAnterior">Ano Anterior:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="anoAnterior"
                                            name="anoAnterior"

                                            value={this.state.PublicoAtendido.anoAnterior}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Reprovado</option>
                                            <option>Aprovado</option>
                                            <option>Evadido</option>
                                        </select>
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

                                            value={this.state.PublicoAtendido.rua}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="numero">Numero:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="numero"
                                            name="numero"

                                            value={this.state.PublicoAtendido.numero}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="bairro">Bairro:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="bairro"
                                            name="bairro"

                                            value={this.state.PublicoAtendido.bairro}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="moraComQuem">Mora Com Quem:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="moraComQuem"
                                            name="moraComQuem"

                                            value={this.state.PublicoAtendido.moraComQuem}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <h3 align="center">Responsavel</h3>

                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="nomeResponsavel">Nome do Responsavel:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="nomeResponsavel"
                                            name="nomeResponsavel"

                                            value={this.state.PublicoAtendido.nomeResponsavel}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="nis">Nis:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="nis"
                                            name="nis"

                                            value={this.state.PublicoAtendido.nis}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="funcao">Função:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="funcao"
                                            name="funcao"

                                            value={this.state.PublicoAtendido.funcao}
                                            onChange={this.handleInputChange} />
                                    </div>


                                    <div className="form-group col-sm-4">
                                        <label htmlFor="escolaridade">Escolaridade:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="escolaridade"
                                            name="escolaridade"

                                            value={this.state.PublicoAtendido.escolaridade}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Fundamental 1 Incompleto</option>
                                            <option>Fundamental 1 completo</option>
                                            <option>Fundamental 2 Incompleto</option>
                                            <option>Fundamental 1 completo</option>
                                            <option>Médio Incompleto</option>
                                            <option>Médio completo</option>
                                            <option>Superior Incompleto</option>
                                            <option>Superior completo</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="profissao">Profissão:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="profissao"
                                            name="profissao"

                                            value={this.state.PublicoAtendido.profissao}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="rendaFamiliar">Renda Familiar:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="rendaFamiliar"
                                            name="rendaFamiliar"

                                            value={this.state.PublicoAtendido.rendaFamiliar}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="contribunite">Contribuinte:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="contribuinte"
                                            name="contribuinte"

                                            value={this.state.PublicoAtendido.contribuinte}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <label htmlFor="observacao">Observação:</label>
                                        <textarea
                                            rows=""
                                            className="form-control"
                                            type="text"
                                            id="observacao"
                                            name="observacao"

                                            value={this.state.PublicoAtendido.observacao}
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


    handleImageChange = event => {
        const target = event.target;

        let file = target.files[0]
        let fotoUrl = URL.createObjectURL(file)

        this.setState({
            fotoPreview: fotoUrl,
            arquivoFoto: file
        });

        // console.log("URL DE FOTO TEMPORARIA " + fotoUrl)
    };

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do campo atravez do target
        const value = target.value;   //pega o valor do campo atravez do target

        this.setState(prevState => ({
            PublicoAtendido: { ...prevState.PublicoAtendido, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        event.preventDefault();

        console.log("ARQUIVO " + this.state.arquivoFoto)

        let formDataObj = new FormData();

        let JSONPublicoAtendido = JSON.stringify(this.state.PublicoAtendido)

        formDataObj.append('publicoAtendido', JSONPublicoAtendido)
        formDataObj.append('arquivoFoto', this.state.arquivoFoto)


        fetch(`${API_ADDRESS}/CadastroPublico`, {
            method: "post",
            body: formDataObj,
        })
            .then(data => {     //vereficar os dados
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
    }
}

export default CriaPA;