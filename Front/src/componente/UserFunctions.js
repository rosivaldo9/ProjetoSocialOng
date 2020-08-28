import axios from 'axios'


export const register = newUser => {
  return axios
    .post('http://localhost:3003/sistema/user', {
      nome: newUser.nome,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    }).catch(err => {
      console.log("Aconteceu um error aki error:  "+ err)
    })
}

export const login = user => {
  return axios
    .post('http://localhost:3003/sistema/userLogin', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data;
    })
    .catch(err => {
      console.log("error Login: "+ err)
    })
}

export const getProfile = user => {
  return axios
    .get('http://localhost:3003/sistema/user', {
   /* headers: { Authorization: ` ${this.getToken()}` }*/
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log("error profile" + err)
    })
}
