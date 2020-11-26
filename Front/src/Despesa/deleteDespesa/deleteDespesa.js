import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api, {API_ADDRESS} from '../../service/service';

class DeleteDespesa extends Component{
    constructor(props) {
        super(props);

        this.state = {
            Despesa: {
                despesa: ""
            },
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/Despesa/${id}`);
        this.setState({ Despesa: response.data });
    }

    render() {
        const { Despesa, redirect } = this.state;
        if (redirect) {
            return <Redirect to="/profile/despesa/lista"/>
        } else {
            return (
                <div className="container">
                <h2 className="text-center">Remover Despesa</h2>
                <div className="row d-flex justify-content-center">
                    <p className="alert alert-danger">
                        Tem certeza que deseja remover a despesa <b>"{Despesa.despesa}"</b>?
                    </p>
                </div>
                <div className="row d-flex justify-content-center">
                    <button
                        className="btn btn-outline-danger btn-lg mr-2"
                        onClick={this.handleClick}>
                        Remover
                </button>
                    <button
                        className="btn btn-outline-secondary btn-lg"
                        onClick={this.props.history.goBack}>
                        Voltar
                </button>
                </div>
            </div >
            )
        }
    }


    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`${API_ADDRESS}/Despesa/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true});
                }
            })
        event.preventDefault();
    }
}

export default DeleteDespesa;