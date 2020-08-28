import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import './graficos.css'

export default class App extends React.Component {

  state = {
    Preto: [], 
    Preto1: [],  
    Preto2: [],
    Pretototal: []
  }

 componentDidMount() { // metodo executa automatico quando inicia a aplicação
     this.loadPadrinho();
 }

 loadPadrinho = async () => {
     const respons = await axios.get('http://localhost:3003/sistema/ListaPreto1'); //buscar dos dados no banco
     this.setState({Preto: respons.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const response = await axios.get('http://localhost:3003/sistema/ListaPreto2'); //buscar dos dados no banco
     this.setState({Preto1: response.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respon = await axios.get('http://localhost:3003/sistema/ListaPreto3'); //buscar dos dados no banco
     this.setState({Preto2: respon.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respo = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculinototal'); //buscar dos dados no banco
     this.setState({Pretototal: respo.data }); // setando o estado de Pu.At. com informações da lista do banco 
    
    }

  render() {
    const {Preto,Preto1, Preto2} = this.state;

  const m1 = this.state.Preto.length;
  const m2 = this.state.Preto1.length;
  const m3 = this.state.Preto2.length;
  const total = this.state.Pretototal.length;

const label=['9 a 11 Anos', '12 a 14 Anos', '15 a 17 Anos'];
const  bgr= [ '#B21F00', '#C9DE00','#2FDE00']
const  hvbgr = ['#501800','#4B5000','#175000']
 

  const preto = {
    labels: label,
    datasets: [{
        label: 'Rainfall',
        backgroundColor:bgr,
        hoverBackgroundColor: hvbgr,
        data: [ m1, m2, m3]
      }]
  }
    return (
      
      <div >
        <h5>Crianças pretas</h5>
        <Pie
          data={preto}
          options={{
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}