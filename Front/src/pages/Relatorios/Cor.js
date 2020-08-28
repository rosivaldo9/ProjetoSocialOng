import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import './graficos.css'

export default class App extends React.Component {

  state = {
   Cor: [], 
   Cor1: [],  
   Cor2: [],
   Cortotal: []
  }

 componentDidMount() { // metodo executa automatico quando inicia a aplicação
     this.loadPadrinho();
 }

 loadPadrinho = async () => {
     const respons = await axios.get('http://localhost:3003/sistema/ListaCorBranca'); //buscar dos dados no banco
     this.setState({Cor: respons.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const response = await axios.get('http://localhost:3003/sistema/ListaCorParda'); //buscar dos dados no banco
     this.setState({Cor1: response.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respon = await axios.get('http://localhost:3003/sistema/ListaCorPreta'); //buscar dos dados no banco
     this.setState({Cor2: respon.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respo = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculinototal'); //buscar dos dados no banco
     this.setState({Cortotal: respo.data }); // setando o estado de Pu.At. com informações da lista do banco 
    
    }

  render() {
    const {Cor,Cor1, Cor2} = this.state;

  const m1 = this.state.Cor.length;
  const m2 = this.state.Cor1.length;
  const m3 = this.state.Cor2.length;
  const total = this.state.Cortotal.length;


const label=['Branca', 'Pardas', 'Pretas'];
const  bgr= [ '#B21F00', '#C9DE00','#2FDE00']
const  hvbgr = ['#501800','#4B5000','#175000']
 

  const cor = {
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
        <h5>Crianças por Cor</h5>
        <Pie
          data={cor}
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