

const mongoose = require("mongoose");
const Schema = mongoose.Schema
const mongoPaginate = require("mongoose-paginate");
const PublicoAtendido = require("./PublicoAtendido")

//documento do banco
const Frequencia = new mongoose.Schema({

    data: {
        type: Date,
        required: true,
        default: Date.now()
    },
    turma: {
        type: Schema.Types.ObjectId,
        ref: "Turma",
        required: true
    },

    //Alunos presentes
    alunos: [{
        type: Schema.Types.ObjectId,
        ref: "PublicoAtendido"
    }]

});

//paginando lista
Frequencia.plugin(mongoPaginate);

mongoose.model('Frequencia', Frequencia);
