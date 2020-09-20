

const mongoose = require("mongoose");
const mongoPaginate = require("mongoose-paginate");

//documento do banco
const Turma = new mongoose.Schema({
       
            nome: {
                type: String,
                required: true
            },
            

});

//paginando lista
Turma.plugin(mongoPaginate);
mongoose.model('Turma', Turma);
