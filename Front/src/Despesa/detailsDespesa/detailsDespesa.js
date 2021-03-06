import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexDespesa/index.css';

export default class DetailsDespesa extends Component {
    state = {
        Despesa: {
            despesa: "",
            descricao: "",
            data: "",
            valor: 0
        }
    }

    async componentDidMount () {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/Despesa/${id}`);  // busca da lista no banco de dados
        this.setState({ Despesa: response.data });         //setando dados do Despesa com dados da lista
    }

    render () {
        const { Despesa } = this.state;  // Despesa no seu estado atual

        return (<form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend align="center">Detalhes</legend>
                <div className="card textForm">
                    <h3 align="center">Despesa</h3>
                    <div className="card-body">

                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="despesa">Despesa</label>
                                <select
                                    className="form-control config-input"
                                    type="text"
                                    id="despesa"
                                    name="despesa"
                                    disabled="true"

                                    value={Despesa.despesa}>
                                    <option></option>
                                    <option>options 1</option>
                                    <option>options 2</option>
                                    <option>options 3</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="valor">Valor</label>
                                <input
                                    className="form-control config-input"
                                    type="Number"
                                    id="valor"
                                    name="valor"
                                    disabled="true"

                                    value={Despesa.valor} />
                            </div>

                            <div className="form-group col-sm-6">
                                <label htmlFor="descricao">descricao:</label>
                                <textarea
                                    row="3"
                                    className="form-control config-input"
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    disabled="true"
                                    value={Despesa.descricao} />
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="data">data:</label>
                                <input
                                    className="form-control config-input"
                                    type="date"
                                    id="data"
                                    name="data"
                                    disabled
                                    value={Despesa.data.substring(0, 10)}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <Link to={`/profile/despesa/remover/${Despesa._id}`} className="btn btn-danger btn-lg float-right mr-2">Remover</Link>
                        <Link to={`/profile/despesa/editar/${Despesa._id}`} className="btn btn-primary btn-lg float-right">Atualizar</Link>
                    </div>
                </div>
            </fieldset>
        </form>
        );
    }
}