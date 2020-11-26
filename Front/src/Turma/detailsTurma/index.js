import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/service';//import url base


class DetailsTurma extends Component {
  constructor() {
    super();

    this.state = {
      Turma: {
        nome: ''
      },
      AlunosDaTurma: []
    }
  }
  render() {
    const { Turma, AlunosDaTurma } = this.state;

    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Turma "{Turma.nome}"</h1>
          </div>

          <div className="container">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header">
                <b>Alunos da turma: {Turma.nome}</b>
              </div>
              <ul className="list-group list-group-flush">
                {Object.keys(AlunosDaTurma).length == 0 && <li className="list-group-item" >Lista vazia</li>}
                {Object.keys(AlunosDaTurma).map((key) => (
                  <li className="list-group-item d-flex" key={key}>
                    <p>{AlunosDaTurma[key].nomeAluno} </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <Link className="btn btn-lg btn-outline-info" to={`/profile/educacao/update-turma/${Turma._id}`}>Editar</Link>
          <Link className="btn btn-lg btn-outline-danger" to={`/profile/educacao/deletar-turma/${Turma._id}`}>Deletar</Link>
          <Link className="btn btn-lg btn-outline-secondary" to="/profile/educacao/turmas">Voltar</Link>
        </footer>
      </div>



    )
  }

  componentDidMount() {
    this.loadTurma()
    this.loadTurmaAluno()
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

  async loadTurmaAluno() {
    const { id } = this.props.match.params;
    const response = await api.get(`/TurmaAluno?turma=${id}`);
    const { docs: alunosDaTurma } = response.data

    //pegando Turma&Aluno e retornando no formato chave valor
    this.setState({
      AlunosDaTurma: alunosDaTurma.reduce((accumulator, current) =>
        Object.assign(/*target*/accumulator,
          /*source*/{
            [current.aluno._id]: {
              nomeAluno: current.aluno.nome,
              turmaAlunoId: current._id
            }
          })
        , {})
    })
  }
}
export default DetailsTurma;