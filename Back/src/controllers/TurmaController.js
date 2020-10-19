const mongoose = require('mongoose');
const Turma = mongoose.model('Turma');
const TurmaAluno = mongoose.model('TurmaAluno')
const Frequencia = mongoose.model('Frequencia')



module.exports={
    //metodo salvar
    async insert (req, res){
        const turma = await Turma.create(req.body);
        return res.json(turma);
    },
    //metodo listar
    async index(req, res){
        const {page} = req.query;
        const turma = await Turma.paginate({}, {page, limit: 500});
        return res.json(turma);
    },
    //metodo de detalhes
    async detalhes(req, res){
        const turma = await Turma.findById(req.params.id);
        return res.json(turma);
    },
    //metodo de Atualizar
    async atualizar(req, res){
        console.log(req.params.id);

        const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(turma);
    },
    //metodo atualizar
    async delete(req, res){
        const idTurma = req.params.id
        await Turma.findByIdAndRemove(idTurma);
        await TurmaAluno.deleteMany({turma: idTurma})
        await Frequencia.deleteMany({turma: idTurma})
        return res.send();
    },
}