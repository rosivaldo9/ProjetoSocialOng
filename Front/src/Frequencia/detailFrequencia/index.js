import React, { Component } from 'react';
import api from '../../service/service';//import url base


class DetailFrequencia extends Component {
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
        <center><h3>Frequência turma "{Turma.nome}" <i>{data}</i></h3></center>
          {!!saveFeedBack && <div className="alert alert-success" role="alert">
            <p>{saveFeedBack}</p>
          </div>
          }
        </div>
        <div className="row">
          <div className="col-md-4 mr-5">
            <table className="table">
              <tbody>
                <tr>
                  <th>Nome</th>
                  <th>presente</th>
                </tr>
                {Frequencia.map((frequencia) => (
                  <tr key={frequencia._id}>
                    <td>
                      <b className="text-capitalize">{frequencia.aluno.nome}</b>
                    </td>
                    <td className="text-center">
                      {frequencia.presente ? 
                      <p className='badge badge-info'>sim</p> :  <p className='badge badge-danger'>não</p> }
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
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

export default DetailFrequencia;