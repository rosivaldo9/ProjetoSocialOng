import React, { Component } from 'react';
import api from '../../service/service';//import url base


class AtualizarTurma extends Component {
    constructor() {
        super();

        this.state = {
            Turma: {
                nome: ''
            },
            saveFeedBack: '',
        }
    }
    render() {
        const { saveFeedBack } = this.state;

        return (
            <div className='container'>
                <h2 className="text-center">Atulização de dados da turma</h2>

                <div className="col-6 mt-5">
                    {saveFeedBack &&
                        <div className="alert alert-success aler" role="alert">
                            <p>{saveFeedBack}</p>
                        </div>}

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name='nome'
                            onChange={this.handleInputChange}
                            placeholder="Nome da turma" 
                            value={this.state.Turma.nome}/>
                        <button className='btn btn-success ml-2' type="submit">Atualizar</button>
                    </form>
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
       const turma = this.state.Turma

        fetch(`http://localhost:3003/sistema/Turma/${turma._id}`, {
            method: "put",
            body: JSON.stringify(turma),
            headers: {
                "Content-Type": "application/json"
            }
            }).then(data => {     //vereficar os dados
                this.setState({
                    saveFeedBack: data.ok ? 'Atualizado com sucesso!' : 'Houve um erro.'
                });
            })
        event.preventDefault();
    }  

    componentDidMount(){
        this.loadTurma()
    }

    async loadTurma(){
        const {id} = this.props.match.params
        const response = await api.get(`/Turma/${id}`)
        this.setState({
            Turma: response.data
        })
    }
   
}
export default AtualizarTurma;