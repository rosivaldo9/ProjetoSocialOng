import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexReceita/index.css';



export default class DetailsReceita extends Component {
    state = {
        Receita: {
            receita: "",
            descricao: "",
            data: Date,
            valor: 0
        }



    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/Receita/${id}`);  // busca da lista no banco de dados
        this.setState({ Receita: response.data });         //setando dados do Receita com dados da lista
    }

    render() {
        const { Receita } = this.state;  // receita no seu estado atual

        return (  <form onSubmit={this.handleSubmit}>
            <fieldset>
            <legend align="center">Enserir Receita</legend>
                <div className="card textForm">
                    <h3 align="center">Receita</h3>
                    <div className="card-body">

                        <div className="form-row">
                            <div className="form-group col-sm-4">
                            <label htmlFor="receita">Receita</label>
                                <select
                                    className="form-control config-input"
                                    type="text"
                                    id="receita"
                                    name="receita"
                                    disabled="true"
                                    
                                    value={Receita.receita}>
                                    <option></option>
                                    <option>options 1</option>
                                    <option>options 2</option>
                                    <option>options 3</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-3">
                            <label  htmlFor="valor">Valor</label>
                                <input
                                    className="form-control config-input"
                                    type="Number"
                                    id="valor"
                                    name="valor"
                                    disabled="true"
                                   
                                    value={Receita.valor}/>
                            </div>
                           
                           <div className="form-group col-sm-6">
                            <label  htmlFor="descricao">descricao:</label>
                                <textarea
                                row="3"
                                    className="form-control config-input"
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    disabled="true"
                                   
                                    value={Receita.descricao}/>
                            </div>
                           
                           
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg float-right">Cadastrar</button>
                    </div>
                  
                    </div>


            
            </fieldset>
        </form>
       );
    }
}