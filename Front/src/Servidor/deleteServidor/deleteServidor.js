import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api, { API_ADDRESS } from '../../service/service';

class DeleteServidor extends Component{
    constructor(props) {
        super(props);

        this.state = {
            Servidor: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/Servidor/${id}`);
        this.setState({ Servidor: response.data });
    }

    render() {
        const { Servidor, redirect } = this.state;
        if (redirect) {
            return <Redirect />
        } else {
            return (
                <div className="container">
                <h2 className="text-center">Remover Servidor</h2>
                <div className="row d-flex justify-content-center">
                    <p className="alert alert-danger">
                        Tem certeza que deseja remover o servidor <b>{Servidor.nome}</b>?
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
        fetch(`${API_ADDRESS}/Servidor/${id}`, {
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

export default DeleteServidor;