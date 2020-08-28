import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link, withRouter } from 'react-router-dom'
import NavBar from '../template/navBar'
import SideBar from '../template/SideBar'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      nome: decoded.nome,
      email: decoded.email
    })
  }

  render() {
    return (
<div>
          <NavBar />
          <SideBar />
          </div>
    )
  }
}

export default Profile


/*
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Last Name</td>
                <td>{this.state.nome}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td></td>
                <td><Link to="/cadastro">Click no aki para ir paro sistema</Link></td>
              </tr>
            </tbody>
          </table>
          */