import React, { Component } from 'react';
import api, { API_ADDRESS } from '../../service/service';//import url base


class Frequencia extends Component {
  constructor() {
    super();

    this.state = {
      Turma: {
        nome: ''
      },
      Frequencia: [],
      saveFeedBack: null,
      data: new Date().toLocaleDateString().substr(0, 10)
    }
  }
  render() {
    const { saveFeedBack, Frequencia, Turma, data } = this.state;
    return (
      <div className='container'>
        <div className="col-12">
        <center><h3>Nova frequência turma: {Turma.nome}</h3></center>
          {!!saveFeedBack && <div className="alert alert-success aler" role="alert">
          <p>{saveFeedBack}</p>
          </div>
          }
        </div>
        <div className="row">
          <div className="col-md-4 mr-5">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header">
                <b>Alunos presentes   </b><i>{data}</i>
              </div>
              <form onSubmit={this.handleSubmit}>
                <ul className="list-group list-group-flush">
                  {Frequencia.length == 0 && <li className="list-group-item" >Lista vazia</li>}
                  {Frequencia.map((frequencia, index) => (
                    <li className="list-group-item" key={frequencia.aluno._id}>
                      <input name={frequencia.aluno._id}
                        tabIndex={index}
                        id={frequencia.aluno._id}
                        className="form-check-input"
                        type="checkbox"
                        checked={frequencia.presente}
                        onChange={this.handleInputChange}
                      />
                      <label class="form-check-label ml-2" for={frequencia.aluno._id}>
                        {frequencia.nomeAluno}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <button type='submit'
                    className="btn btn-success">
                    Salvar
                    </button >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleInputChange = event => {
    const target = event.target;
    const checked = target.checked
    const index = target.tabIndex

    let copiaFrequencia = this.state.Frequencia
    copiaFrequencia[index].presente = checked

    this.setState({
      Frequencia: copiaFrequencia
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const alunosDaTurma = this.state.Frequencia

    fetch(`${API_ADDRESS}/Frequencia`, {
      method: "post",
      body: JSON.stringify(alunosDaTurma),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {
      this.setState({
        saveFeedBack: data.ok ? 'Os dados foram atualizados com sucesso!' : 'Erro ao atualizar'
      })

      return data.json()
    }).then(d => {
        console.log(d);
    })
  }

  componentDidMount() {
    this.loadTurma()
    this.loadTurmaAluno()
  }

  componentDidUpdate() {
    console.log("ADT", this.state.Frequencia);
  }

  async loadTurma() {
    const { id } = this.props.match.params;
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
    const { docs: alunosDaTurma} = response.data
 
    let alunosModificados = alunosDaTurma.map((current) =>
    ({
        turma: current.turma._id,
        aluno: current.aluno._id,
        nomeAluno: current.aluno.nome,
        presente: false
      })
    )
    this.setState({
      Frequencia: alunosModificados
    }) 
  }
}
export default Frequencia;