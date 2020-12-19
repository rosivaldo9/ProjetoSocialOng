const mongoose = require('mongoose');
const User = mongoose.model('User');
const Session = mongoose.model('Session');


const bcrypt = require('bcrypt')
const jwt = require('../jwt')
process.env.SECRET_KEY = 'secret'


class Userr{
  constructor(){

  }

    async insert (req, res){
              //dados do body
    const userData = {
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password
      }
      //pesquisa por email existente
      User.findOne({
        email: req.body.email
      })
        .then(user => {
          if (!user) {
              User.create(userData)
                .then(user => {
                  res.json({ status: user.email + 'Registered!' })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            
          } else {
            res.json({ error: 'User already exists' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })

    }

  
    //login de acesso
  async login(req, res) {
    await User.findOne({
      email: req.body.email 
      
    }) //verificando se email existe no banco
    .then(user => {
      if (user){
          jwt.login(user.id, user.email).then( toke =>{
              Session.findOne({
                  userId: user.id
              }).then(session =>{
                if(session === null){
                  return Session.create({
                    userId: user.id,
                    token: toke
                  }).then(()=>{
                    return res.json(toke);
                  }).catch(err =>{
                    return err;
                  });
                }else{
                  return Session.updateOne({
                    token:toke
                  }).then(()=>{
                    return res.json(toke);
                  }).catch(err =>{
                    return err;
                  });
                }
              }).catch(err=>{
                console.log("error "+err)
              })
          })
          
      }else{
        console.log("err 10")
      }
    })
    .catch(err => {
      console.log("err 4")
      res.send('error: ' + err)
    })
}
  async profile(req, res) {
    /*
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    await User.findOne({ _id: decoded._id }) //verificando Id 
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('Usuario não existe');
        }
      })
      .catch(err => {
        res.send('aconte ceu um error aki: ' + err)
      })*/
  }
  async indexSession (req, res){
    const {page} = req.query;
    const session = await Session.find();
    return res.json(session);
}

    async index (req, res){
        const {page} = req.query;
        const usuario = await User.find();
        return res.json(usuario);
    }
    async detalhes (req, res){
        const usuario=await Usuario.findById(req.params.id);
        return res.json(usuario);
    }
    async atualizar(req, res){
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(usuario);
    }
    async delete (req, res){
     await Usuario.findByIdAndRemove(req.params.id);
     return res.send();
        }
      
      async  updatSession(id, toke){
        console.log("err 8")
      await  Session.findOne({
          where: {
            userId: id
          }
        }).then(session =>{
          if(session === null){
            console.log("err 9")
            return Session.create({
              userId: id,
              token: toke
            }).then(()=>{
              console.log("err 10")
              return res.json(toke);
            }).catch(err =>{
              console.log("err 11")
              return err;
            });
          }else{
            console.log("err 12")
            return Session.updateOne({
              token:toke
            }).then(()=>{
              return res.json("Deu certo   "+toke);
            }).catch(err =>{
              return err;
            });
            
          }
        }).catch(err=>{
          console.log("çççll")
        })
       
              }   
}

module.exports = new Userr();