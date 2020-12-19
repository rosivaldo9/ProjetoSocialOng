import React, { Component } from 'react'
import { history } from '../History'
import { login } from './UserFunctions'
import './component.css'

import Profile from './Profile'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (res) {
        this.props.history.push("/profile")
      }
    })
  }
  render() {

    return (
      <div className="container ">
        <div className="row imageFundoLogin">
          <div className="col-md-5 mt-4 mx-auto PosiLogin">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Login de acesso ao Sistema</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange} />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
      )
  }
}

export default Login

