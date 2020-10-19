import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api from '../../service/service';

class DeleteTurma extends Component {
    constructor() {
        super();

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
            return <Redirect exact from='/profile/educacao/deletar-turma/:id' to='/profile/educacao/turmas'/>
        } else {
            return (
                <div className="container">
                <h2 className="text-center">Remover turma</h2>
                <p className="alert alert-danger">
                    Tem certeza que deja remover a turma <b>"{this.state.Turma.nome}"</b>, 
                    esta ação também removerá os alunos desta turma e sua frequência.
                </p>

          
                <button type="button" className="btn btn-outline-danger btn-lg" onClick={this.handleClick}>Remover</button>
               <Link className="btn btn-outline-secondary btn-lg" to="/profile/educacao/turmas">Voltar</Link>
                </div >
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