const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path')

const app = express();//gerenciador de rotas
app.use(express.json());//gerenciando rotas em formato Json
app.use(bodyParser.urlencoded({extended: true}));//configurado para analisar dados no formato json da url
app.use(bodyParser.json())//configurado para analisar dados no formato json
app.use(cors());

app.use('/src/uploads', express.static(path.join(__dirname, 'src/uploads')))
app.use('/assets', express.static(path.join(__dirname, 'src/assets')))



    //conexão com banco de dados
mongoose.connect("mongodb+srv://dbJoao:ecmascript@ongdb.gfubd.mongodb.net/ongdb?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});


//centraliza os models nessa pasta
    requireDir('./src/models');
   

//rotas
app.use('/sistema', require('./src/routes/routes'));

//porta
app.listen(3003);
