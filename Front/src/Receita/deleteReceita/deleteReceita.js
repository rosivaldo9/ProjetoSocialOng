import React, { Component } from 'react'
import './delete.css'
import { Redirect, Link } from 'react-router-dom'
import api, { API_ADDRESS } from '../../service/service'

class DeleteReceita extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Receita: {
                receita: ""
            },
            redirect: false
        }
    }

    async componentDidMount () {
        const { id } = this.props.match.params;
        const response = await api.get(`/Receita/${id}`);
        this.setState({ Receita: response.data });
    }

    render () {
        const { Receita, redirect } = this.state;
        if (redirect) {
            return <Redirect to='../lista' />
        } else {
            return (
                <div className='container'>
                    <h2 className='text-center'>Remover Receita</h2>
                    <div className="row d-flex justify-content-center">
                        <p className='alert alert-danger text-center'>
                            Tem certeza que deseja remover a Receita <b>{Receita.receita}</b>?
                        </p>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className='btn btn-lg btn-outline-danger mr-1' onClick={this.handleClick}>Remover</button>
                        <Link className="btn btn-outline-secondary btn-lg" to="../lista">Voltar</Link>
                    </div>
                </div>

            )
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`${API_ADDRESS}/Receita/${id}`, {
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

export default DeleteReceita;