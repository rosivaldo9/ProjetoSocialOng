

const mongoose = require("mongoose");
const mongoPaginate = require("mongoose-paginate");

//documento do banco
const TurmaAluno = new mongoose.Schema({
            
            turma: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Turma",
            },
            
            aluno: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "PublicoAtendido",
            }

});

//paginando lista
TurmaAluno.plugin(mongoPaginate);

mongoose.model('TurmaAluno', TurmaAluno);
