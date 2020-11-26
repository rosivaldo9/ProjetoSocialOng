import React, { Component } from 'react';
import './update.css';
import { Redirect } from "react-router-dom";
import api, { API_ADDRESS } from '../../service/service';

class EditarReceita extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Receita: {
                receita: "",
                descricao: "",
                data: "",
                valor: 0
            },
            redirect: false,
        }
    }

    //metodos que executa junto com a aplicação
    async componentDidMount () {
        const { id } = this.props.match.params; //buscar parametros
        const response = await api.get(`/Receita/${id}`); //busca do registro
        this.setState({ Receita: response.data });  // atualizando estado com dados do registro 
    }

    render () {
        const { Receita, redirect } = this.state;
        if (redirect) {
            return <Redirect to="../lista" />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Atualizar Receita</legend>
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
                                            onChange={this.handleInputChange}
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
                                            onChange={this.handleInputChange}
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
                                            onChange={this.handleInputChange}
                                            value={Receita.descricao} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="data">data:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="data"
                                            name="data"
                                            value={Receita.data.substring(0,10)}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-bottom">
                            <button type='submit' className="btn-success btn-lg float-right mr-2 mb-2">Atualizar</button>

                            </div>
                        </div>
                    </fieldset>
                </form>
            );
        }
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Receita: { ...prevState.Receita, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        const { id } = this.props.match.params;
        fetch(`${API_ADDRESS}/Receita/${id}`,
            {
                method: "put",
                body: JSON.stringify(this.state.Receita),
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

export default EditarReceita;