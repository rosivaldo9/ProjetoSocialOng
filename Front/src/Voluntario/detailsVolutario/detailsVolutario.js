import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexVolutario/index.css';




export default class PublicoPA extends Component {
    state = {
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
           cursoHabilitacao:"",
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
        const response = await api.get(`/Voluntario/${id}`);  // busca da lista no banco de dados
        this.setState({ Voluntario: response.data });         //setando dados do Voluntario com dados da lista
    }

    render() {
        const { Voluntario } = this.state;  // Voluntario no seu estado atual

        return (

   <form onSubmit={this.handleSubmit}>
<fieldset>
    <legend>Detalhes Usuario</legend>
    <div className="card textForm">
        <h3 align="center">Dados Pessoais</h3>
        <div className="card-body">
            <div className="form-row">
                <div className="form-group col-sm-5">
                <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.nome} />
                </div>
                <div className="form-group col-sm-4">
                <label  htmlFor="dataNascimento">Data Nascimento:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.dataNascimento} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="sexo">Sexo:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                value={Voluntario.sexo} />
                    </div>                                 
                
                <div className="form-group col-sm-4">
                <label  htmlFor="religiao">SSP:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={Voluntario.ssp} />
                </div>
                <div className="form-group col-sm-4">
                <label  htmlFor="rg">RG:</label>
                    <input
                        className="form-control config-input"   
                        disabled="true"           
                        value={Voluntario.rg}/>
                </div>
                <div className="form-group col-sm-4">
                <label htmlFor="cpf">CPF:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.cpf} />
                
            </div>
               
                <div className="form-group col-sm-3">
                <label htmlFor="peso">Data Expedição:</label>
                
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.dataExpedicao} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="raca">Raça:</label>
            
                <input 
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.raca}/>
 
                </div>                                    
                <div className="form-group col-sm-3">
                <label  htmlFor="altura">Estado:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.estado}
                    />
                </div>
                <div className="form-group col-sm-3">
                <label htmlFor="naturalidade">Naturalidade:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.naturalidade}
                    />
            </div>
            </div>

            <h3 align="center">Escolaridade</h3>

            <div className="form-row">
               <div className="form-group col-sm-5">
                <label  htmlFor="escola">Titulo:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.titulo} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="ano">Seção:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.secao}/>
 
                </div>
                <div className="form-group col-sm-4">
                <label  htmlFor="anoAnterior">Zona:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.zona}
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
                        value={Voluntario.rua} />
                </div>
                <div className="form-group col-sm-2">
                <label htmlFor="numero">Numero:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={Voluntario.numero}/>
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="bairro">Bairro:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.bairro}/>
                </div>
                <div className="form-group col-sm-4">
                <label htmlFor="moraComQuem">Mora Com Quem:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.moraComQuem} />
                </div>
            </div>
            <h3 align="center">Responsavel</h3>

            <div className="form-row">
                <div className="form-group col-sm-5">
                <label htmlFor="nomeResponsavel">Grau de Instrução:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.grauInstrucao} />
                </div>
                <div className="form-group col-sm-3">
                <label htmlFor="nis">Curso de Habilitação:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.cursoHabilitacao} />
                </div>
                <div className="form-group col-sm-4">
                <label htmlFor="funcao">Função:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={Voluntario.funcao}/>
                </div>
           
            
                <div className="form-group col-sm-4">
                <label  htmlFor="escolaridade">Pai:</label>
                <input 
                className="form-control config-input"
                disabled="true"
                        value={Voluntario.pai} />
                </div>
                <div className="form-group col-sm-3">
                <label  htmlFor="profissao">Mãe:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.mae}
                    />
                </div>
                <div className="form-group col-sm-2">
                <label htmlFor="rendaFamiliar">Email:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.email}/>
                </div>
                <div className="form-group col-sm-3">
                <label htmlFor="contribunite">Celular:</label>
                    <input
                        className="form-control config-input"
                        disabled="true"
                        value={Voluntario.celular} />
                </div>
              
                <div className="form-group col-sm-6">
                <label htmlFor="observacao">Estado Civil:</label>
                    <textarea
                    rows=""
                        className="form-control"
                        disabled="true"
                        value={Voluntario.estadoCivil} />
            </div>
            
        
        </div>
            <Link to={`/page15/${Voluntario._id}`}><button type="button" className="btn btn-warning btn-lg">Editar</button> </Link> 
            <Link to={`/page16/${Voluntario._id}`}><button  type="button" className="btn btn-info btn-lg">Deletar</button> </Link>
        </div>
      
        </div>


</fieldset>
</form>
       );
    }
}