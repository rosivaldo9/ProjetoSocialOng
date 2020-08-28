


const express = require('express');
const routes = express.Router();


const CadastroPublico = require('../controllers/CadastroPublicoController');
const Servidor = require('../controllers/ServidorController');
const Voluntario = require('../controllers/VoluntarioController');
const Padrinho = require('../controllers/PadrinhoController');
const Despesa = require('../controllers/DespesasController');
const User = require('../controllers/UserController');
const rela = require('../relatorio/rela')
const Receita = require('../controllers/ReceitaController')



/*
routes.post('/usuarios', usuarioController.insert);
routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.detalhes);
routes.put('/usuarios/:id', usuarioController.atualizar)
routes.delete('/usuarios/:id', usuarioController.delete);*/

//Rotas publico Atendido
routes.post('/CadastroPublico', CadastroPublico.insert);//salvar
routes.get('/CadastroPublico', CadastroPublico.index);//lista
routes.get('/CadastroPublico/:id', CadastroPublico.detalhes);//detalhes
routes.put('/CadastroPublico/:id', CadastroPublico.atualizar);//atualizar
routes.delete('/CadastroPublico/:id', CadastroPublico.delete);//deletar
routes.get('/ListaPublicoFemeninoTotal', CadastroPublico.indexSexoFemeninoTotal);//deletar
routes.get('/ListaPublicoMasculinototal', CadastroPublico.indexSexoMasculinoTotal);//deletar
routes.get('/ListaPublicoMasculino1', CadastroPublico.indexSexoMasculino1);//deletar
routes.get('/ListaPublicoMasculino2', CadastroPublico.indexSexoMasculino2);//deletar
routes.get('/ListaPublicoMasculino3', CadastroPublico.indexSexoMasculino3);//deletar
routes.get('/ListaPublicoFemenino1', CadastroPublico.indexSexoFemenino1);//deletar
routes.get('/ListaPublicoFemenino2', CadastroPublico.indexSexoFemenino2);//deletar
routes.get('/ListaPublicoFemenino3', CadastroPublico.indexSexoFemenino3);//deletar
routes.get('/ListaAnos1', CadastroPublico.indexAnos1);//deletar
routes.get('/ListaAnos2', CadastroPublico.indexAnos2);//deletar
routes.get('/ListaAnos3', CadastroPublico.indexAnos3);//deletar
routes.get('/ListaPreto1', CadastroPublico.indexPreto1);//deletar
routes.get('/ListaPreto2', CadastroPublico.indexPreto2);//deletar
routes.get('/ListaPreto3', CadastroPublico.indexPreto3);//deletar
routes.get('/ListaBranco1', CadastroPublico.indexBranco1);//deletarBranco
routes.get('/ListaBranco2', CadastroPublico.indexBranco2);//deletar
routes.get('/ListaBranco3', CadastroPublico.indexBranco3);//deletar
routes.get('/ListaParda1', CadastroPublico.indexParda1);//deletarParda
routes.get('/ListaParda2', CadastroPublico.indexParda2);//deletar
routes.get('/ListaParda3', CadastroPublico.indexParda3);//deletar
routes.get('/ListaCorParda', CadastroPublico.indexCorParda);//deletarParda
routes.get('/ListaCorBranca', CadastroPublico.indexCorParda);//deletar
routes.get('/ListaCorPreta', CadastroPublico.indexCorPreta);//deletar


//routes.post('/rr', rela.rela)


//Rotas Servidores
routes.post('/Servidor', Servidor.insert);//salvar
routes.get('/Servidor', Servidor.index);//lista
routes.get('/Servidor/:id', Servidor.detalhes);//detalhes
routes.put('/Servidor/:id', Servidor.atualizar);//atualizar
routes.delete('/Servidor/:id', Servidor.delete);//deletar

//Rotas Voluntario
routes.post('/Voluntario', Voluntario.insert);//salvar
routes.get('/Voluntario', Voluntario.index);//lista
routes.get('/Voluntario/:id', Voluntario.detalhes);//detalhes
routes.put('/Voluntario/:id', Voluntario.atualizar);//atualizar
routes.delete('/Voluntario/:id', Voluntario.delete);//deletar


//Rotas Padrinho
routes.post('/Padrinho', Padrinho.insert);//salvar
routes.get('/Padrinho', Padrinho.index);//lista
routes.get('/Padrinho/:id', Padrinho.detalhes);//detalhes
routes.put('/Padrinho/:id', Padrinho.atualizar);//atualizar
routes.delete('/Padrinho/:id', Padrinho.delete);//deletar


//Rotas Despesas
routes.post('/Despesa', Despesa.insert);//salvar
routes.get('/Despesa', Despesa.index);//lista
routes.get('/Despesa/:id', Despesa.detalhes);//detalhes
routes.put('/Despesa/:id', Despesa.atualizar);//atualizar
routes.delete('/Despesa/:id', Despesa.delete);//deletar 

//Rotas Receitas
routes.post('/Receita', Receita.insert);//salvar
routes.get('/Receita', Receita.index);//lista
routes.get('/Receita/:id', Receita.detalhes);//detalhes
routes.put('/Receita/:id', Receita.atualizar);//atualizar
routes.delete('/Receita/:id', Receita.delete);//deletar 

routes.post('/user', User.insert);//salvar
routes.post('/userLogin', User.login);//lista
routes.get('/user', User.profile);//lista

module.exports= routes;

