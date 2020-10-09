import React, { Component } from 'react';
import api from '../../service/service';//import url base


class UpdateTurma extends Component {
  constructor() {
    super();

    this.state = {
      Turma: {
        nome: ''
      },
      PublicoAtendido: [],
      AlunosDaTurma: [],
      saveFeedBack: null,
    }
  }
  render() {
    const { saveFeedBack, PublicoAtendido, AlunosDaTurma, Turma } = this.state;

    return (
      <div className='container'>
        <div className="col-12">
          <h1>Adicionar alunos à turma</h1>
          {!!saveFeedBack && <div className="alert alert-success aler" role="alert">
            <p>Os dados foram salvos com sucesso</p>
          </div>
          }
        </div>
        <div className="row">
          <div className="col-md-4 mr-5">
            <form onSubmit={this.handleSubmit}>
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                  <b>Alunos da turma: {Turma.nome}</b>
                </div>
                <ul className="list-group list-group-flush">
                  {AlunosDaTurma.length == 0 && <li className="list-group-item" >Lista vazia</li>}
                  {AlunosDaTurma.map((a) => (
                    <li className="list-group-item" key={a.aluno/*id*/}>{a.nomeAluno}</li>
                  ))}
                </ul>
                <div className="card-footer">
                  <button type='submit' className="btn btn-success">Salvar</button >
                </div>
              </div>
            </form>
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
                      class="form-check-input"
                      type="checkbox"
                      defaultChecked={false}
                      title={a.nome}
                      onChange={this.handleInputChange}
                    />
                    <label class="form-check-label" for={a._id}>
                      {a.nome}
                    </label></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleClick = (alunoId, nomeAluno) => (event) => {
    const turmaId = this.state.Turma._id
    this.setState(prevState => ({
      AlunosDaTurma: [...prevState.AlunosDaTurma, { turma: turmaId, aluno: alunoId, nomeAluno, }]
    }))
  }

  // Metodo para atualizar o estado do campo
  handleInputChange = event => {
    const target = event.target;
    const alunoId = target.name;     //pega o nome do camo atravez do target
    const checked = target.checked
    const nomeAluno = target.title

    const turmaId = this.state.Turma._id

    if (checked) {

      this.setState(prevState => ({
        AlunosDaTurma: [...prevState.AlunosDaTurma, { turma: turmaId, aluno: alunoId, nomeAluno: nomeAluno }]
      }));
    } else {
      let alunos = this.state.AlunosDaTurma.filter((a) => a.aluno !== alunoId)
      this.setState({
        AlunosDaTurma: alunos
      })
    }
  };

  //metodo para salvar os dados
  handleSubmit = event => {
    console.log("SUBMIT");
    event.preventDefault();

    fetch("http://localhost:3003/sistema/TurmaAluno", {
      method: "post",
      body: JSON.stringify(this.state.AlunosDaTurma),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {     //vereficar os dados
      if (data.ok)
        this.setState({
          saveFeedBack: data.ok ? 'sucesso' : 'falha'
        });

    })
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
    // pegando o ID da url através do props
    const response = await api.get(`/Turma/${id}`); //buscar dos dados no banco
    const turma = response.data

    this.setState({
      Turma: turma
    })
  }

  async loadTurmaAluno() {
    const { id } = this.props.match.params;
    // pegando o ID da url através do props
    const response = await api.get(`/TurmaAluno?turma=${id}`); //buscar dos dados no banco
    const { docs: alunosDaTurma } = response.data
    this.setState({
      AlunosDaTurma: alunosDaTurma.map((adt) => {
        return {
          aluno: adt.aluno._id,
          turma: id,
          nomeAluno: adt.aluno.nome
        }
      })
    })
  }

  async loadPublicoAtendido() {
    const response = await api.get(`/CadastroPublico`)
    const { docs: pa, ...info } = response.data
    console.log("ALUNOS ", pa);
    this.setState({
      PublicoAtendido: pa
    })
  }
}
export default UpdateTurma;