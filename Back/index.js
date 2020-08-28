const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();//gerenciador de rotas
app.use(express.json());//gerenciando rotas em formato Json
app.use(bodyParser.urlencoded({extended: true}));//configurado para analisar dados no formato json da url
app.use(bodyParser.json())//configurado para analisar dados no formato json
app.use(cors());


    //conexão com banco de dados
mongoose.connect("mongodb://localhost/test", {useNewUrlParser:true, useUnifiedTopology: true});


//centraliza os models nessa pasta
    requireDir('./src/models');
   

//rotas
app.use('/sistema', require('./src/routes/routes'));

//porta
app.listen(3003);
