import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import './graficos.css'

export default class App extends React.Component {

  state = {
    TotalSexo: [], 
    TotalSexo1: [],  
    TotalSexo2: [],
    TotalSexototal: []
  }

 componentDidMount() { // metodo executa automatico quando inicia a aplicação
     this.loadPadrinho();
 }

 loadPadrinho = async () => {
     const respons = await axios.get('http://localhost:3003/sistema/ListaPublicoMasculinototal'); //buscar dos dados no banco
     this.setState({TotalSexo: respons.data }); // setando o estado de Pu.At. com informações da lista do banco 

     const response = await axios.get('http://localhost:3003/sistema/ListaPublicoFemeninoTotal'); //buscar dos dados no banco
     this.setState({TotalSexo1: response.data }); // setando o estado de Pu.At. com informações da lista do banco 
    
    }

  render() {
    const {TotalSexo,TotalSexo1} = this.state;

  const m1 = this.state.TotalSexo.length;
  const m2 = this.state.TotalSexo1.length;


const label=['Masculino', 'Femenino'];
const  bgr= [ '#B21F00', '#C9DE00']
const  hvbgr = ['#501800','#4B5000']
 

  const TotalSex = {
    labels: label,
    datasets: [{
        label: 'Rainfall',
        backgroundColor:bgr,
        hoverBackgroundColor: hvbgr,
        data: [ m1, m2]
      }]
  }
    return (
      
      <div >
        <h5>Total por Sexo</h5>
        <Pie
          data={TotalSex}
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