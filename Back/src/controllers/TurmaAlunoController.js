const mongoose = require('mongoose');
const TurmaAluno = mongoose.model('TurmaAluno');

module.exports={
    //metodo salvar
    async insert (req, res){
        const turmaaluno = await TurmaAluno.insertMany(req.body);
        return res.json(turmaaluno);
    },
    //metodo listar nome da turma e nome dos alunos presentes
    async index(req, res){
        const {page} = req.query;
        const turmaaluno = await TurmaAluno.paginate(req.query, {
                populate: [
                    {path: 'aluno', select: '_id nome'},
                    {path: 'turma', select: '_id nome'}
                ], 
                page, limit: 500
            })
       
        return res.json(turmaaluno);
    },
    //metodo de detalhes
    async detalhes(req, res){
        const turmaaluno = await TurmaAluno.findById(req.params.id)
        return res.json(turmaaluno);
    },
    //metodo de Atualizar
    async atualizar(req, res){
        const turmaaluno = await TurmaAluno.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(req.body)
        return res.json(turmaaluno);
    },
    async delete(req, res){
        await TurmaAluno.findByIdAndRemove(req.params.id);
        return res.send();
    },
}