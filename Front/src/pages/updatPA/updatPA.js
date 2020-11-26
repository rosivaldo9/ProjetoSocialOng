import React, { Component } from 'react';
import './update.css';
import { Redirect } from "react-router-dom";
import { api, API_ADDRESS, STATIC_SERVER_ADDRESS } from '../../service/service'


class EditarPA extends Component {
    constructor(props) {
        super(props);


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
                rg: 0,
                cpf: 0,
                escola: "",
                ano: "",
                anoAnterior: "",
                rua: "",
                numero: "",
                bairro: "",
                moraComQuem: "",
                nomeResponsavel: "",
                cpfResponsavel: 0,
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
            fotoPreview: ""
        }
    }

    //metodos que executa junto com a aplicação
    async componentDidMount() {
        const { id } = this.props.match.params; //buscar parametros
        const response = await api.get(`/CadastroPublico/${id}`); //busca do registro
        let pa = response.data
        this.setState({
            PublicoAtendido: pa,
            fotoPreview: STATIC_SERVER_ADDRESS + pa.foto
        });  // atualizando estado com dados do registro 
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />,
                <div className="alert alert-success aler" role="alert">
                    <p>Os dados foram salvo com sucesso</p>
                </div>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Usuario</legend>
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
                                            className="form-control config-input"
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
                                            className="form-control config-input"
                                            type="text"
                                            id="religiao"
                                            name="religiao"


                                            value={this.state.PublicoAtendido.religiao}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Catolica</option>
                                            <option>Evangelica</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="rg">RG:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="rg"
                                            name="rg"


                                            value={this.state.PublicoAtendido.rg}
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
                                            className="form-control config-input"
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
                                            className="form-control config-input"
                                            type="text"
                                            id="ano"
                                            name="ano"


                                            value={this.state.PublicoAtendido.ano}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>opção 1</option>
                                            <option>opção 2</option>
                                            <option>opçõ 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="anoAnterior">Ano Anterior:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="anoAnterior"
                                            name="anoAnterior"


                                            value={this.state.PublicoAtendido.anoAnterior}
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


                                            value={this.state.PublicoAtendido.rua}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label htmlFor="numero">Numero:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="numero"
                                            name="numero"


                                            value={this.state.PublicoAtendido.numero}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Negro</option>
                                            <option>Branco</option>
                                            <option>Parda</option>
                                            <option>Preto</option>
                                        </select>
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
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="funcao"
                                            name="funcao"


                                            value={this.state.PublicoAtendido.funcao}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
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
                                            <option>Catolica</option>
                                            <option>Evangelica</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="profissao">Profissão:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
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
            PublicoAtendido: { ...prevState.PublicoAtendido, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        event.preventDefault();
        const { id } = this.props.match.params;

        let formDataObj = new FormData();

        let JSONPublicoAtendido = JSON.stringify(this.state.PublicoAtendido)

        formDataObj.append('publicoAtendido', JSONPublicoAtendido)
        formDataObj.append('arquivoFoto', this.state.arquivoFoto)


        fetch(`${API_ADDRESS}/CadastroPublico/${id}`, {
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

export default EditarPA;