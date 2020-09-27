

const mongoose = require("mongoose");
const mogoPaginate = require("mongoose-paginate");

//documento do banco
const Despesa = new mongoose.Schema({
       
            despesa: {
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
                default: Date.now()
            }
      

});

//paginando lista
Despesa.plugin(mogoPaginate);

mongoose.model('Despesa', Despesa);
