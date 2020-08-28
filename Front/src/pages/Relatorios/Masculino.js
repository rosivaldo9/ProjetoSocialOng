import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import './graficos.css'

export default class App extends React.Component {

  state = {
   Masculino: [], 
   Masculino1: [],  
   Masculino2: [],
   Masculinototal: []
  }

 componentDidMount() { // metodo executa automatico quando inicia a aplicação
     this.loadPadrinho();
 }

 loadPadrinho = async () => {
     const respons = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculino1'); //buscar dos dados no banco
     this.setState({Masculino: respons.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const response = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculino2'); //buscar dos dados no banco
     this.setState({Masculino1: response.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respon = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculino3'); //buscar dos dados no banco
     this.setState({Masculino2: respon.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const respo = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculinototal'); //buscar dos dados no banco
     this.setState({Masculinototal: respo.data }); // setando o estado de Pu.At. com informações da lista do banco 
    
    }
    

  render() {
    const {Masculino,Masculino1, Masculino2} = this.state;

  const m1 = this.state.Masculino.length;
  const m2 = this.state.Masculino1.length;
  const m3 = this.state.Masculino2.length;
  const total = this.state.Masculinototal.length;

const label=['9 a 11 Anos', '12 a 14 Anos', '15 a 17 Anos'];
const  bgr= [ '#B21F00', '#C9DE00','#2FDE00']
const  hvbgr = ['#501800','#4B5000','#175000']
 

  const masculino = {
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
        <h5>Sexo Masculino</h5>
        <Pie
          data={masculino}
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