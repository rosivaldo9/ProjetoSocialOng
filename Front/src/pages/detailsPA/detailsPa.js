import React, { Component } from 'react';
import {api, STATIC_SERVER_ADDRESS} from '../../service/service';
import { Link } from "react-router-dom";
import '../indexPA/index.css';
import './detail.css'


export default class PublicoPA extends Component {
    state = {
        publicoAtendido: {
            nome: "",
            foto: "",
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

    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/CadastroPublico/${id}`);  // busca da lista no banco de dados
        this.setState({ publicoAtendido: response.data });         //setando dados do publicoAtendido com dados da lista
    }

    render() {
        const { publicoAtendido } = this.state;  // PublicoAtendido no seu estado atual
        

        return (

   <form className ="tituloDetails" onSubmit={this.handleSubmit}>
<fieldset>
    <legend align="center">Detalhes Usuario</legend>
    <div className="card textForm">
        <h3 align="center">Dados Pessoais</h3>
        <div className="card-body">
            <div className="form-row">
                <img src={STATIC_SERVER_ADDRESS + this.state.publicoAtendido.foto}
                width="150"
                height="170"
                />
            </div>
            <div className="form-row">
                <div className="form-group col-sm-5">
                <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.nome} />
                </div>
                <div className="form-group col-sm-4">
                <label  htmlFor="dataNascimento">Data Nascimento:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.dataNascimento} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="sexo">Sexo:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                value={publicoAtendido.sexo} />
                    </div>                                 
                
                <div className="form-group col-sm-4">
                <label  htmlFor="religiao">Religião:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={publicoAtendido.religiao} />
                </div>
                <div className="form-group col-sm-4">
                <label  htmlFor="rg">RG:</label>
                    <input
                        className="form-control config-input"   
                        disabled="true"           
                        value={publicoAtendido.rg}/>
                </div>
                <div className="form-group col-sm-4">
                <label htmlFor="cpf">CPF:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.cpf} />
                
            </div>
               
                <div className="form-group col-sm-3">
                <label htmlFor="peso">Peso:</label>
                
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.peso} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="raca">Raça:</label>
            
                <input 
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.raca}/>
 
                </div>                                    
                <div className="form-group col-sm-3">
                <label  htmlFor="altura">Altura:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.altura}
                    />
                </div>
                <div className="form-group col-sm-3">
                <label htmlFor="naturalidade">Naturalidade:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.naturalidade}
                    />
            </div>
            </div>

            <h3 align="center">Escolaridade</h3>

            <div className="form-row">
               <div className="form-group col-sm-5">
                <label  htmlFor="escola">Escola:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.escola} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="ano">Ano:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.ano}/>
 
                </div>
                <div className="form-group col-sm-4">
                <label  htmlFor="anoAnterior">Ano Anterior:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.anoAnterior}
                    />
                </div>
            </div>
            <h3 align="center">Endereço</h3>

            <div className="form-row">
               <div className="form-group col-sm-3">
                <label  htmlFor="rua">Rua:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.rua} />
                </div>
                <div className="form-group col-sm-2">
                <label htmlFor="numero">Numero:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={publicoAtendido.numero}/>
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="bairro">Bairro:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.bairro}/>
                </div>
                <div className="form-group col-sm-4">
                <label htmlFor="moraComQuem">Mora Com Quem:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.moraComQuem} />
                </div>
            </div>
            <h3 align="center">Responsavel</h3>

            <div className="form-row">
                <div className="form-group col-sm-5">
                <label htmlFor="nomeResponsavel">Nome do Responsavel:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.nomeResponsavel} />
                </div>
                <div className="form-group col-sm-3">
                <label htmlFor="nis">Nis:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.nis} />
                </div>
                <div className="form-group col-sm-4">
                <label htmlFor="funcao">Função:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={publicoAtendido.funcao}/>
                </div>
           
            
                <div className="form-group col-sm-4">
                <label  htmlFor="escolaridade">Escolaridade:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={publicoAtendido.escolaridade} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="profissao">Profissão:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.profissao}
                    />
                </div>
                <div className="form-group col-sm-2">
                <label htmlFor="rendaFamiliar">Renda Familiar:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.rendaFamiliar}/>
                </div>
                <div className="form-group col-sm-3">
                <label htmlFor="contribunite">Contribuinte:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={publicoAtendido.contribuinte} />
                </div>
              
                <div className="form-group col-sm-6">
                <label htmlFor="observacao">Observação:</label>
                    <textarea
                    rows=""
                        className="form-control"
                        disabled="true"
                        value={publicoAtendido.observacao} />
            </div>
            
        
        </div>
                <Link to={`/page5/${publicoAtendido._id}`}><button type="button" className="btn btn-warning btn-lg">Editar</button></Link>
                <Link to={`/page6/${publicoAtendido._id}`}><button  type="button" className="btn btn-danger btn-lg">Deletar</button></Link>
        </div>
      
        </div>


</fieldset>
</form>
       );
    }
}