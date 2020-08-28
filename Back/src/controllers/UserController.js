const mongoose = require('mongoose');
const User = mongoose.model('User');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'


module.exports = {
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
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              userData.password = hash
              User.create(userData)
                .then(user => {
                  res.json({ status: user.email + 'Registered!' })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            })
          } else {
            res.json({ error: 'User already exists' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })

    },

  
    //login de acesso
  async login(req, res) {
    await User.findOne({ email: req.body.email }) //verificando se email existe no banco
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            nome: user.nome,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'Token invalido' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
},

  async profile(req, res) {
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
      })
  },


    async index (req, res){
        const {page} = req.query;
        const usuario = await Usuario.paginate({}, {page, limit: 5});
        return res.json(usuario);
    },
    async detalhes (req, res){
        const usuario=await Usuario.findById(req.params.id);
        return res.json(usuario);
    },
    async atualizar(req, res){
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(usuario);
    },
    async delete (req, res){
     await Usuario.findByIdAndRemove(req.params.id);
     return res.send();
        }
}