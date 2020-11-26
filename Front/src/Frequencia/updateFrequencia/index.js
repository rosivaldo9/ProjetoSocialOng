import React, { Component } from 'react';
import api, { API_ADDRESS } from '../../service/service';//import url base


class UpdateFrequencia extends Component {
  constructor() {
    super();

    this.state = {
      Turma: {
        nome: ''
      },
      Frequencia: [],
      saveFeedBack: null,
      data: new Date().toLocaleDateString().substr(0, 10)//TODO mudar para props
    }
  }
  render() {
    const { saveFeedBack, Frequencia, Turma, data } = this.state;
    return (
      <div className='container '>
        <div className="col-12">
          <center><h3>Atualização de frequência turma: {Turma.nome}</h3></center>
          {!!saveFeedBack && <div className="alert alert-success aler" role="alert">
            <p>{saveFeedBack}</p>
          </div>
          }
        </div>
        <div className="row">
          <div className="col-md-4 mr-5">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header">
                <b>Alunos presentes </b><i>{data}</i>
              </div>
              <form onSubmit={this.handleSubmit}>
                <ul className="list-group list-group-flush">
                  {Frequencia.length == 0 && <li className="list-group-item" >Lista vazia</li>}
                  {Frequencia.map((frequencia, index) => (
                    <li className="list-group-item" key={frequencia._id}>
                      <input name={frequencia._id}
                        tabIndex={index}
                        id={frequencia._id}
                        className="form-check-input"
                        type="checkbox"
                        checked={frequencia.presente}
                        title={frequencia.aluno.nome}
                        onChange={this.handleInputChange}
                      />
                      <label class="form-check-label ml-2" for={frequencia._id}>
                        {frequencia.aluno.nome}
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

    console.log("SUBMIT ", alunosDaTurma);

    fetch(`${API_ADDRESS}/Frequencia`, {
      method: "put",
      body: JSON.stringify(alunosDaTurma),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {
      console.log(data.json());
      this.setState({
        saveFeedBack: data.ok ? 'Os dados foram atualizados com sucesso!' : 'Erro ao atualizar'
      })
    })
  }

  componentDidMount() {
    this.loadTurma()
    this.loadFrequencia()
  }

  componentDidUpdate() {
    //console.log("ADT", this.state.Frequencia);
    const params = this.props;
    console.log("params", params);
  }

  async loadTurma() {
    const { idTurma, data } = this.props.location.state;
    const response = await api.get(`/Turma/${idTurma}`); //buscar dos dados no banco
    const turma = response.data

    this.setState({
      Turma: turma,
      data
    })
  }

  async loadFrequencia() {
    const { idTurma, data } = this.props.location.state;
    const response = await api.get(`/Frequencia?turma=${idTurma}&data=${data}`);
    const { docs: frequencia } = response.data

      this.setState({
        Frequencia: frequencia
      })
    }
  }

export default UpdateFrequencia;