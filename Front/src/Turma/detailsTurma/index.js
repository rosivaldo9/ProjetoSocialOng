import React, { Component } from 'react';
import api from '../../service/service';//import url base


class DetailsTurma extends Component {
    constructor() {
        super();

        this.state = {
            Turma: {
                nome: ''
            },
            Alunos: [],
            AlunosDaTurma: [],
            saveFeedBack: '',
        }
    }
    render() {
        const { saveFeedBack, Alunos,AlunosDaTurma, Turma } = this.state;

        return (
            <div className='container'>
                <div className="col-12"> <h2>Turma: {Turma.nome}</h2></div>
                <div className="col-6 mt-5">
                    <ul>
                      {Alunos.map((a)=> (
                          <li key={a._id}  onClick={this.handleClick(a._id, a.nome)}>{a.nome} {a._id}</li>
                      ))}
                    </ul>
                </div>
                <div className="col-6 mt-5">
                    <ul>
                      {AlunosDaTurma.map((a)=> (
                          <li key={a.nomeAluno}>{a.nomeAluno}</li>
                      ))}
                    </ul>
                </div>
            </div>
        )
    }

    handleClick = (alunoId, nomeAluno) => (event) => {
        const turmaId = this.state.Turma._id
        this.setState(prevState => ({
            AlunosDaTurma: [...prevState.AlunosDaTurma, {turma:turmaId, aluno:alunoId, nomeAluno,}]
        }))
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            AlunosDaTurma: { ...prevState.AlunosDaTurma, [name]: value } //atualizando o estado do campo com o value
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
        }).then(data => {     //vereficar os dados
            if (data.ok) this.loadTurmas()
            this.setState({
                saveFeedBack: data.ok ? 'sucesso' : 'falha'
            });

        })
        event.preventDefault();
    }

    componentDidMount() {
        this.loadTurma()
        this.loadAlunos()
    }

    componentDidUpdate(){
       console.log("ADT", this.state.AlunosDaTurma);
    }

    async loadTurma() {
        const { id } = this.props.match.params;
        console.log("TURMA ", id);
        // pegando o ID da url através do props
        const response = await api.get(`/Turma/${id}`); //buscar dos dados no banco
        const turma = response.data

        this.setState({
            Turma: turma
        })
    }

    async loadAlunos() {
        const response = await api.get(`/CadastroPublico`)
        const { docs: alunos, ...info } = response.data
        console.log("ALUNOS ", alunos);
        this.setState({
            Alunos: alunos
        })
    }
}
export default DetailsTurma;