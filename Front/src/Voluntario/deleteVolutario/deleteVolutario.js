import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api from '../../service/service';

class DeleteUsuario extends Component{
    constructor(props) {
        super(props);

        this.state = {
            Voluntario: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/Voluntario/${id}`);
        this.setState({ Voluntario: response.data });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect />
        } else {
            return (
                <fieldset>
                    <legend>Deletar usuario</legend>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <h5>{this.state.Voluntario.nome}</h5>
                        <p>Tem certeza que deja deletar esse usuario?</p>
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
        fetch(`http://localhost:3003/sistema/Voluntario/${id}`, {
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

export default DeleteUsuario;