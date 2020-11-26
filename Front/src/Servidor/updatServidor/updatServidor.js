import React, { Component } from 'react';
import './update.css';
import { Redirect } from "react-router-dom";
import { api, API_ADDRESS, STATIC_SERVER_ADDRESS } from '../../service/service'

class EditarServidor extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Servidor: {
                nome: "",
                foto: "",
                dataNascimento: Date,
                sexo: "",
                raca: "",
                titulo: 0,
                secao: 0,
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
                funcao: "",
                rua: "",
                numero: "",
                bairro: "",
                celular: "",
                email: ""

            },
            redirect: false,
            arquivoFoto: {},
            fotoPreview: ""
        }
    }

    //metodos que executa junto com a aplicação
    async componentDidMount () {
        const { id } = this.props.match.params; //buscar parametros
        const response = await api.get(`/Servidor/${id}`); //busca do registro
        let servidor = response.data

        this.setState({
            Servidor: response.data,
            fotoPreview: STATIC_SERVER_ADDRESS + servidor.foto
        });  // atualizando estado com dados do registro 
    }


    render () {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Servidor</legend>
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

                                            value={this.state.Servidor.nome}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="dataNascimento">Data Nascimento:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="dataNascimento"
                                            name="dataNascimento"

                                            value={this.state.Servidor.dataNascimento}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="sexo">Sexo:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="sexo"
                                            name="sexo"

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

                                            value={this.state.Servidor.ssp}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="rg">RG:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="rg"
                                            name="rg"

                                            value={this.state.Servidor.rg}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="cpf">CPF:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="cpf"
                                            name="cpf"

                                            value={this.state.Servidor.cpf}
                                            onChange={this.handleInputChange} />

                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label htmlFor="dataExpedicao">Data de Expedição:</label>

                                        <input
                                            className="form-control config-input"
                                            type="date"
                                            id="dataExpedicao"
                                            name="dataExpedicao"

                                            value={this.state.Servidor.dataExpedicao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="raca">Raça:</label>

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
                                        <label htmlFor="titulo">titulo:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="titulo"
                                            name="titulo"

                                            value={this.state.Servidor.altura}
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

                                            value={this.state.Servidor.naturalidade}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <h3 align="center">Escolaridade</h3>

                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="secao">secao:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="secao"
                                            name="secao"

                                            value={this.state.Servidor.secao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="zona">Zona:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="zona"
                                            name="zona"

                                            value={this.state.Servidor.zona}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="resevista">Resevista:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="resevista"
                                            name="resevista"

                                            value={this.state.Servidor.resevista}
                                            onChange={this.handleInputChange}
                                        />
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

                                            value={this.state.Servidor.rua}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="numero">Numero:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="numero"
                                            name="numero"

                                            value={this.state.Servidor.numero}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="bairro">Bairro:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="bairro"
                                            name="bairro"

                                            value={this.state.Servidor.bairro}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="estado">Estado:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="estado"
                                            name="estado"

                                            value={this.state.Servidor.estado}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <h3 align="center">Responsavel</h3>

                                <div className="form-row">
                                    <div className="form-group col-sm-5">
                                        <label htmlFor="pai">Pai:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="pai"
                                            name="pai"

                                            value={this.state.Servidor.pai}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="mae">Mãe:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="mae"
                                            name="mae"

                                            value={this.state.Servidor.mae}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="funcao">Função:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="funcao"
                                            name="funcao"

                                            value={this.state.Servidor.funcao}
                                            onChange={this.handleInputChange} />

                                    </div>


                                    <div className="form-group col-sm-4">
                                        <label htmlFor="estadoCivil">Estado Civil:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="estadoCivil"
                                            name="estadoCivil"

                                            value={this.state.Servidor.estadoCivil}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Solteiro</option>
                                            <option>Casado</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="grauInstrucao">Grau de Intrução:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="grauInstrucao"
                                            name="grauInstrucao"

                                            value={this.state.Servidor.grauInstrucao}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="cursoHabilitacao">Curso Habilitacão:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="cursoHabilitacao"
                                            name="cursoHabilitacao"

                                            value={this.state.Servidor.cursoHabilitacao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="celular">Celular:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="celular"
                                            name="celular"
                                            value={this.state.Servidor.celular}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <label htmlFor="email">Email:</label>
                                        <input

                                            className="form-control"
                                            type="text"
                                            id="email"
                                            name="email"

                                            value={this.state.Servidor.email}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg float-right">Atualizar</button>
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
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Servidor: { ...prevState.Servidor, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        event.preventDefault();
        const { id } = this.props.match.params;

        let formDataObj = new FormData();

        let JSONServidor = JSON.stringify(this.state.Servidor)

        formDataObj.append('servidor', JSONServidor)
        formDataObj.append('arquivoFoto', this.state.arquivoFoto)


        fetch(`${API_ADDRESS}/Servidor/${id}`, {
            method: "put",
            body: formDataObj,
        })
            .then(data => {     //vereficar os dados
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
    }
}

export default EditarServidor;