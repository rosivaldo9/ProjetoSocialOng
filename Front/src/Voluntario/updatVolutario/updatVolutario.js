import React, { Component } from 'react';
import './update.css';
import { Redirect } from "react-router-dom";
import api from '../../service/service';

class EditarUsuario extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Voluntario: {
                nome: "",
                dataNascimento: Date,
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

    //metodos que executa junto com a aplicação
    async componentDidMount() {
        const { id } = this.props.match.params; //buscar parametros
        const response = await api.get(`/Voluntario/${id}`); //busca do registro
        this.setState({ Voluntario: response.data });  // atualizando estado com dados do registro 
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Criar Voluntario</legend>
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
                                            
                                            value={this.state.Voluntario.nome}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                    <label  htmlFor="dataNascimento">Data Nascimento:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="dataNascimento"
                                            name="dataNascimento"
                                           
                                            value={this.state.Voluntario.dataNascimento}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                    <label  htmlFor="sexo">Sexo:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="sexo"
                                            name="sexo"
                                           
                                            value={this.state.Voluntario.sexo}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
                                        </div>                                 
                                    
                                    <div className="form-group col-sm-4">
                                    <label  htmlFor="ssp">SSP:</label> 
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="ssp"
                                            name="ssp"
                                           
                                            value={this.state.Voluntario.ssp}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Catolica</option>
                                            <option>Evangelica</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                    <label  htmlFor="rg">RG:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="rg"
                                            name="rg"
                                           
                                            value={this.state.Voluntario.rg}
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
                                           
                                            value={this.state.Voluntario.cpf}
                                            onChange={this.handleInputChange} />
                                    
                                </div>
                                   
                                    <div className="form-group col-sm-3">
                                    <label htmlFor="dataExpedicao">Data de Expedição:</label>
                                    
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="dataExpedicao"
                                            name="dataExpedicao"
                                           
                                            value={this.state.Voluntario.dataExpedicao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                    <label  htmlFor="raca">Raça:</label>
                                
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="raca"
                                            name="raca"
                                           
                                            value={this.state.Voluntario.raca}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Negro</option>
                                            <option>Branco</option>
                                            <option>Parda</option>
                                            <option>Preto</option>
                                        </select>
                                    </div>                                    
                                    <div className="form-group col-sm-3">
                                    <label  htmlFor="titulo">titulo:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="titulo"
                                            name="titulo"
                                           
                                            value={this.state.Voluntario.altura}
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
                                           
                                            value={this.state.Voluntario.naturalidade}
                                            onChange={this.handleInputChange}
                                        />
                                </div>
                                </div>

                                <h3 align="center">Escolaridade</h3>

                                <div className="form-row">
                                   <div className="form-group col-sm-5">
                                    <label  htmlFor="secao">secao:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="secao"
                                            name="secao"
                                           
                                            value={this.state.Voluntario.secao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                    <label  htmlFor="zona">Zona:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="zona"
                                            name="zona"
                                           
                                            value={this.state.Voluntario.zona}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>opção 1</option>
                                            <option>opção 2</option>
                                            <option>opçõ 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                    <label  htmlFor="resevista">Resevista:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="resevista"
                                            name="resevista"
                                           
                                            value={this.state.Voluntario.resevista}
                                            onChange={this.handleInputChange}
                                        />
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
                                           
                                            value={this.state.Voluntario.rua}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-2">
                                    <label htmlFor="numero">Numero:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="numero"
                                            name="numero"
                                           
                                            value={this.state.Voluntario.numero}
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
                                           
                                            value={this.state.Voluntario.bairro}
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
                                           
                                            value={this.state.Voluntario.estado}
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
                                           
                                            value={this.state.Voluntario.pai}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                    <label htmlFor="mae">Mãe:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="mae"
                                            name="mae"
                                           
                                            value={this.state.Voluntario.mae}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                    <label htmlFor="funcao">Função:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="funcao"
                                            name="funcao"
                                           
                                            value={this.state.Voluntario.funcao}
                                            onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
                                    </div>
                               
                                
                                    <div className="form-group col-sm-4">
                                    <label  htmlFor="estadoCivil">Estado Civil:</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="estadoCivil"
                                            name="estadoCivil"
                                           
                                            value={this.state.Voluntario.estadoCivil}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>Catolica</option>
                                            <option>Evangelica</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                    <label  htmlFor="grauInstrucao">Grau de Intrução:</label>
                                        <input
                                            className="form-control config-input"
                                            type="number"
                                            id="grauInstrucao"
                                            name="grauInstrucao"
                                           
                                            value={this.state.Voluntario.grauInstrucao}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group col-sm-2">
                                    <label htmlFor="cursoHabilitacao">Curso Habilitacão:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="cursoHabilitacao"
                                            name="cursoHabilitacao"
                                           
                                            value={this.state.Voluntario.cursoHabilitacao}
                                            onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="form-group col-sm-3">
                                    <label htmlFor="celular">Celular:</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="celular"
                                            name="celular"
                                            value={this.state.Voluntario.celular}
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
                                           
                                            value={this.state.Voluntario.email}
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
            Voluntario: {...prevState.Voluntario, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        const {id} = this.props.match.params;
        fetch(`http://localhost:3003/sistema/Voluntario/${id}`, 
            {
            method: "put",
            body: JSON.stringify(this.state.Voluntario),
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

export default EditarUsuario;