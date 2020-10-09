import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api from '../../service/service';

class DeleteTurma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Turma: {},
            redirect: false
        };
    }

    componentDidMount() { 
      this.loadTurma()
    }

    async loadTurma(){
        const { id } = this.props.match.params;

        const response = await api.get(`/Turma/${id}`);
        this.setState({ Turma: response.data });

    }

    render() {
        const { redirect } = this.state;
        
        if (redirect) {
            return <Redirect exact from='/educacao/deletar-turma/:id' to='/educacao/cadastro-turma'/>
        } else {
            return (
                <fieldset>
                    <legend>Deletar Turma</legend>
                    <div>
                        <p>Tem certeza que deja deletar a turma "{this.state.Turma.nome}" </p>
                        <button type="button" className="btn btn-danger btn-lg" onClick={this.handleClick}>Remover</button>
                    </div>
                    <br/>

                  <button type="button" className="btn btn-warning btn-lg"> <Link to="/profile/educacao/cadastro-turma">Voltar</Link></button> 
                </fieldset>
            )
        }
    }


    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3003/sistema/Turma/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
        event.preventDefault();

    }
}

export default DeleteTurma;