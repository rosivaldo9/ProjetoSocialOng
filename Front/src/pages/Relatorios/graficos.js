import React from 'react';
import Masculino from './Masculino'
import Femenino from './Femenino'
import TotalAno from './TotalAnos'
import Pretas from './Preto'
import Brancas from './Branco'
import Pardas from './Parda'
import Cor from './Cor'
import Sexo from './TotalSexo'
import './graficos.css'

export default class App extends React.Component {


  render() {
   

    return (
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-4">
      <Masculino />
    </div>
    <div className="col-sm-4">
      <Femenino />
    </div>
    <div className="col-sm-4">
      <TotalAno />
    </div>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <Pretas />
    </div>
    <div className="col-sm-4">
      <Brancas />
    </div>
    <div className="col-sm-4">
      <Pardas />
    </div>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <Cor />
    </div>
    <div className="col-sm-4">
      <Sexo />
    </div>
    <div className="col-sm-4">
    </div>
  </div>
</div>
    );
  }
}