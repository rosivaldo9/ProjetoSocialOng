import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './insert.css';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import $ from 'jquery';



class CriaReceita extends Component {
    constructor() {
        super();

        this.state = {
            Receita: {
                receita: "",
                descricao: "",
                valor: Number,
                data: Date

            },
            redirect: false,
        }
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return (
                
            <Redirect to="/page26"/>,
                <div   className="alert alert-success aler" role="alert">
          <p>Os dados foram salvo com sucesso</p>
           </div>
           
             
             )
            
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Enserir Receita</legend>
                        <div className="card textForm">
                            <h3 align="center">Receita</h3>
                            <div className="card-body">

                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="receita">Receita</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="receita"
                                            name="receita"

                                            value={this.state.Receita.receita}
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>options 1</option>
                                            <option>options 2</option>
                                            <option>options 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="valor">Valor</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="valor"
                                            name="valor"
                                            required

                                            value={this.state.Receita.valor}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <label htmlFor="descricao">descricao:</label>
                                        <textarea
                                            row="3"
                                            className="form-control config-input"
                                            type="text"
                                            id="descricao"
                                            name="descricao"
                                            required

                                            value={this.state.Receita.descricao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="data">data:</label>
                                        <input
                                            className="form-control config-input"
                                            type="Date"
                                            id="data"

                                            value={this.state.Receita.data = new Date()}
                                            onChange={this.handleInputChange} />
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-primary btn-lg float-right" >Cadastrar</button>
                              
                                </div>

                        </div>


                    </fieldset>

                </form>

 

            )
        }
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Receita: { ...prevState.Receita, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        fetch("http://localhost:3003/sistema/Receita", {
            method: "post",
            body: JSON.stringify(this.state.Receita),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {     //vereficar os dados
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
        event.preventDefault();
    }
}

export default CriaReceita;

