

const mongoose = require("mongoose");
const mogoPaginate = require("mongoose-paginate");

//documento do banco
const Padrinho = new mongoose.Schema({
       
            nome: {
                type: String,
            },
            dataNascimento:{
                type: Date,
            },
            estado:{
                type: String,
            },

            cnpj:{
                type: String,
            },
            cep:{
                type: String,
            },
            rua:{
                type: String,
            },
            numero:{
                type: String,
            },
            bairro:{
                type: String,
            },
            celular:{
                type: String,
            },
            email:{
                type: String,
            }

});

//paginando lista
Padrinho.plugin(mogoPaginate);

mongoose.model('Padrinho', Padrinho);
