

const mongoose = require("mongoose");
const mogoPaginate = require("mongoose-paginate");

//documento do banco
const Receita = new mongoose.Schema({
       
            receita: {
                type: String,
            },
            descricao:{
                type: String,
            },
            valor:{
                type: Number,
            },
            data:{
                type: Date,

            }
      

});

//paginando lista
Receita.plugin(mogoPaginate);

mongoose.model('Receita', Receita);
