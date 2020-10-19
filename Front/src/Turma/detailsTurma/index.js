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
    }
  }
  render() {
    const { Turma } = this.state;

    return (
      <div>
            <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Turma "{Turma.nome}"</h1>
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

componentDidMount(){
  this.loadTurma()
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
}
export default DetailsTurma;