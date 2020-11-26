import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexReceita/index.css';



export default class DetailsReceita extends Component {
    state = {
        Receita: {
            _id: 0,
            receita: "",
            descricao: "",
            data: "",
            valor: 0
        }
    }

    async componentDidMount () {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/Receita/${id}`);  // busca da lista no banco de dados
        this.setState({ Receita: response.data });         //setando dados do Receita com dados da lista
    }

    render () {
        const { Receita } = this.state;  // receita no seu estado atual

        return (<form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend align="center">Detalhes</legend>
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
                                <label htmlFor="valor">Valor</label>
                                <input
                                    className="form-control config-input"
                                    type="Number"
                                    id="valor"
                                    name="valor"
                                    disabled="true"

                                    value={Receita.valor} />
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
                                    value={Receita.descricao} />
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="data">data:</label>
                                <input
                                    className="form-control config-input"
                                    type="date"
                                    id="data"
                                    name="data"
                                    disabled
                                    value={Receita.data.substring(0, 10)}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <Link className='btn btn-outline-danger btn-lg float-right mr-3' to={`/profile/receita/remover/${Receita._id}`}>Remover</Link>
                        <Link className='btn btn-outline-primary btn-lg float-right' to={`/profile/receita/editar/${Receita._id}`}>Atualizar</Link>
                    </div>
                </div>
            </fieldset>
        </form>
        );
    }
}