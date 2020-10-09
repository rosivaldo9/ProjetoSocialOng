import React, { Component } from 'react';
import api from '../../service/service';//import url base

import Turmas from '../indexTurma'
import './insert.css';

class CriarTurma extends Component {
    constructor() {
        super();

        this.state = {
            Turma: {
                nome: ''
            },
            Turmas: [],
            saveFeedBack: '',
        }
    }
    render() {
        const { saveFeedBack } = this.state;

        return (
            <div className='container'>
                <div className="col-6 mt-5">
                    {saveFeedBack &&
                        <div className="alert alert-success aler" role="alert">
                            <p>{saveFeedBack}</p>
                        </div>}

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name='nome'
                            onChange={this.handleInputChange}
                            placeholder="Nome da turma" />
                        <button className='btn btn-success ml-2' type="submit">Salvar</button>
                    </form>

                </div>
                <div className="col-6 mt-5">
                    <Turmas turmas={this.state.Turmas} />
                </div>
            </div>
        )
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Turma: { ...prevState.Turma, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        fetch("http://localhost:3003/sistema/Turma", {
            method: "post",
            body: JSON.stringify(this.state.Turma),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {     //vereficar os dados
                if(data.ok) this.loadTurmas()
                this.setState({
                    saveFeedBack: data.ok ? 'sucesso' : 'falha'
                });

            })
        event.preventDefault();
    }

    componentDidMount() {
        this.loadTurmas()
    }

   
    async loadTurmas() {
        const response = await api.get(`/Turma`); //buscar dos dados no banco
        const { docs: turmas, ...info } = response.data
        this.setState({
            Turmas: turmas
        })
    }
}
export default CriarTurma;