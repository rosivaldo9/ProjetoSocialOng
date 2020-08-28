import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import './graficos.css'

export default class App extends React.Component {

  state = {
    Branco: [], 
   Branco1: [],  
   Branco2: [],
   Brancototal: []
  }

 componentDidMount() { // metodo executa automatico quando inicia a aplicação
     this.loadPadrinho();
 }

 loadPadrinho = async () => {
     const respons = await axios.get('http://localhost:3003/sistema/ListaBranco1'); //buscar dos dados no banco
     this.setState({Branco: respons.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const response = await axios.get('http://localhost:3003/sistema/ListaBranco2'); //buscar dos dados no banco
     this.setState({Branco1: response.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respon = await axios.get('http://localhost:3003/sistema/ListaBranco3'); //buscar dos dados no banco
     this.setState({Branco2: respon.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respo = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculinototal'); //buscar dos dados no banco
     this.setState({Brancototal: respo.data }); // setando o estado de Pu.At. com informações da lista do banco 
    
    }

  render() {
    const {Branco,Branco1, Branco2} = this.state;

  const m1 = this.state.Branco.length;
  const m2 = this.state.Branco1.length;
  const m3 = this.state.Branco2.length;
  const total = this.state.Brancototal.length;

const label=['9 a 11 Anos', '12 a 14 Anos', '15 a 17 Anos'];
const  bgr= [ '#B21F00', '#C9DE00','#2FDE00']
const  hvbgr = ['#501800','#4B5000','#175000']
 

  const branco = {
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
        <h5>Crianças Brancas</h5>
        <Pie
          data={branco}
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