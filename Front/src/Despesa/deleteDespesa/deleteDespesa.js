import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api from '../../service/service';

class DeleteDespesa extends Component{
    constructor(props) {
        super(props);

        this.state = {
            Despesa: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/Despesa/${id}`);
        this.setState({ Despesa: response.data });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/profile"/>
        } else {
            return (
                <fieldset>
                    <legend>Deletar usuario</legend>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <h5>{this.state.Despesa.despesa}</h5>
                        <p>Tem certeza que deja deletar essa Despesa?</p>
                        <button onClick={this.handleClick}>Remover</button>
                    </div>
                    <br /><br />

                    <Link to="/">Voltar</Link>
                </fieldset>
            )
        }
    }


    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3003/sistema/Despesa/${id}`, {
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