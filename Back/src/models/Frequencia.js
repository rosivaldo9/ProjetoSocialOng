

const mongoose = require("mongoose");
const Schema = mongoose.Schema
const mongoPaginate = require("mongoose-paginate");

const Frequencia = new mongoose.Schema({

    data: {
        type: String,
        required: true,
        default: new Date().toLocaleString()
    },
    turma: {
        type: Schema.Types.ObjectId,
        ref: "Turma",
        required: true,
        autopopulate: true
    },
    aluno: {
        type: Schema.Types.ObjectId,
        ref: "PublicoAtendido",
        required: true,
        //autopopulate: true
    },
    presente: {
        type: Boolean,
        default: false
    }

});

//paginando lista
Frequencia.plugin(mongoPaginate);
//Frequencia.plugin(require('mongoose-autopopulate'));
mongoose.model('Frequencia', Frequencia);
