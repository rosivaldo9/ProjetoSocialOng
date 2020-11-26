import React, { Component } from 'react';
import api, { API_ADDRESS } from '../../service/service';//import url base


class UpdateTurma extends Component {
  constructor() {
    super();

    this.state = {
      Turma: {
        nome: ''
      },
      PublicoAtendido: [],
      AlunosDaTurma: {},
      saveFeedBack: null,
    }
  }
  render() {
    const { saveFeedBack, PublicoAtendido, AlunosDaTurma, Turma } = this.state;
    return (
      <div className='container'>
        <div className="col-12">
          <h2 className="text-center">Adicionar alunos à turma "{Turma.nome}"</h2>
          {!!saveFeedBack && <div className="alert alert-success aler" role="alert">
            <p>Os dados foram salvos com sucesso</p>
          </div>
          }
        </div>
        <div className="row">
          <div className="col-md-4 mr-5">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                  <b>Alunos da turma: {Turma.nome}</b>
                </div>
                <ul className="list-group list-group-flush">
                  {Object.keys(AlunosDaTurma).length == 0 && <li className="list-group-item" >Lista vazia</li>}
                  {Object.keys(AlunosDaTurma).map((key) => (
                    <li className="list-group-item d-flex" key={key}>
                      <p>{AlunosDaTurma[key].nomeAluno} </p>
                      <button className="btn btn-danger ml-auto"
                        onClick={this.handleRemove(key, AlunosDaTurma[key].turmaAlunoId)}>-</button>
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                <form onSubmit={this.handleSubmit}>

                  <button type='submit'
                    className="btn btn-success">
                    Salvar
                    </button >
               </form>
                </div>
              </div>
          </div>

          <div className="col-md-4 mr-5">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header">
                <b>PublicoAtendido</b>
              </div>
              <ul className="list-group list-group-flush">
                {PublicoAtendido.length == 0 && <li className="list-group-item" >Lista vazia</li>}
                {PublicoAtendido.map((a) => (
                  <li className="list-group-item" key={a._id}>
                    <input name={a._id}
                      id={a._id}
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={false}
                      checked={AlunosDaTurma.hasOwnProperty(a._id)} //marcado se ja existe no array
                      title={a.nome}
                      onChange={this.handleInputChange}
                      disabled={AlunosDaTurma.hasOwnProperty(a._id)} // desativado se ja existe no array
                    />
                    <label class="form-check-label ml-2" for={a._id}>
                      {a.nome}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleRemove = (alunoId, turmaAlunoId) =>  (event) => {
    event.preventDefault()
    //Pegando os alunos menos o removido
    let { [alunoId]: alunoRemovido, ...restoDosAlunos } = this.state.AlunosDaTurma
    if (turmaAlunoId !== undefined) {//Se o aluno veio do banco, remove.
       fetch(`${API_ADDRESS}/TurmaAluno/${turmaAlunoId}`, {
        method: "delete"
      })
        .then(data => {
          if (data.ok) {
            console.log("ELiminado");
          }
        }).catch(err => {
          console.error(err)
        })
    }
    this.setState({
      AlunosDaTurma: restoDosAlunos
    })
  }

  handleInputChange = event => {
    const target = event.target;
    const alunoId = target.name;
    const checked = target.checked
    const nomeAluno = target.title

    //adicionar PA a lista de Alunos da turma se a key alunoId não existir
    if (checked && !this.state.AlunosDaTurma.hasOwnProperty(alunoId)) {
      this.setState(prevState => ({
        AlunosDaTurma: { ...prevState.AlunosDaTurma, [alunoId]: { nomeAluno, turmaAlunoId: undefined } }
      }
      ));
    }
  };

  //metodo para salvar os dados
  handleSubmit = event => {
    event.preventDefault();
    const alunosDaTurma = this.state.AlunosDaTurma

    let alunosFiltrados = []
    //filtrando alunos que não existem no banco e retornado em formato para envio
    Object.keys(alunosDaTurma).forEach(key => {
      if (alunosDaTurma[key].turmaAlunoId === undefined)
        alunosFiltrados.push({
          aluno: key,
          turma: this.state.Turma._id
        })
    });
    console.log("SUBMIT ", alunosFiltrados);

    if (alunosFiltrados.length > 0) {

      fetch(`${API_ADDRESS}/TurmaAluno`, {
        method: "post",
        body: JSON.stringify(alunosFiltrados),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data => {
        if (data.ok) this.loadTurmaAluno()
        this.setState({
          saveFeedBack: data.ok ? 'sucesso' : 'falha'
        })
      })
    }
  }

  componentDidMount() {
    this.loadTurma()
    this.loadPublicoAtendido()
    this.loadTurmaAluno()
  }

  componentDidUpdate() {
    console.log("ADT", this.state.AlunosDaTurma);
  }

  async loadTurma() {
    const { id } = this.props.match.params;
    const response = await api.get(`/Turma/${id}`); //buscar dos dados da turma selecionada
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

  async loadPublicoAtendido() {
    const response = await api.get(`/CadastroPublico`)
    const { docs: pa } = response.data
    this.setState({
      PublicoAtendido: pa
    })
  }
}
export default UpdateTurma;