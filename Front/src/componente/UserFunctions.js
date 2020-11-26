
import api from '../service/service'

export const register = newUser => {
  return api
    .post('/user', {
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
  return api
    .post('/userLogin', {
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
  return api
    .get('/user', {
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
