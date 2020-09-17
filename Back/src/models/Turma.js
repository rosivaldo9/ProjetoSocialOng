

const mongoose = require("mongoose");
const mongoPaginate = require("mongoose-paginate");

//documento do banco
const Turma = new mongoose.Schema({
       
            nome: {
                type: String,
                required: true
            },
            alunos: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "PublicoAtendido",
                autopopulate: true
            }]

});

//paginando lista
Turma.plugin(mongoPaginate);
Turma.plugin(require('mongoose-autopopulate'));

mongoose.model('Turma', Turma);
