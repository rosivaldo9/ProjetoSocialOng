import React from 'react';
import { Pie } from 'react-chartjs-2';
import api from '../service/service'
/*

 const lista = async () => {
  return await axios.get('http://localhost:3003/sistema/ListaPublicoMasculino')
      .then(response => {
        const gg = response.data
        console.log(gg.length)
       return gg.length;
      })
      .catch(err => {
        console.log("error profile" + err)
      })
    }


const a =  lista();
console.log(a)
     
 const stat = {
  labels: ['Masculino', 'Femenino'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000'
      ],
      data: [ a, 10]
    }
  ]
}

*/

export default class App extends React.Component {

  state = {
    Padrinho: [], //dados da tabela
    PadrinhoInfo: {},  //informações necessarias para paginação e apresentação dos dados
    drinho: []
  }


  componentDidMount() { // metodo executa automatico quando inicia a aplicação
    this.loadPadrinho();
  }

  loadPadrinho = async () => {
    const response = await api.get('/ListaPublicoMasculino'); //buscar dos dados no banco
    this.setState({ Padrinho: response.data }); // setando o estado de Pu.At. com informações da lista do banco 

  }

  render() {
    const { Padrinho, PadrinhoInfo } = this.state;

    const b = this.state.Padrinho.length;

    console.log(this.state.Padrinho.length)

    const stat = {
      labels: ['Masculino', 'Femenino'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00'
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000'
          ],
          data: [b, b]
        }
      ]
    }

    return (

      <div>
        <Pie
          data={stat}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>

    );
  }
}