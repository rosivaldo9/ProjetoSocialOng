const mongoose = require('mongoose');
const Frequencia = mongoose.model('Frequencia');

module.exports={
    //metodo salvar
    async insert (req, res){
        console.log("CREATE")
        const frequencia = await Frequencia.create(req.body);
        return res.json(frequencia);
    },
    //metodo listar nome da turma e nome dos alunos presentes
    async index(req, res){
        const {page} = req.query;
        console.log("PARAMS \n", req.query)
        const frequencia = await Frequencia.paginate(
            req.query, 
            {
                populate: [
                    {path: 'aluno', select: '_id nome'},
                    {path: 'turma', select: '_id nome'}
                ],
                page, limit: 500
            })
       
        return res.json(frequencia);
    },
    //metodo de detalhes
    async detalhes(req, res){
        const frequencia = await Frequencia.findById(req.params.id)
        return res.json(frequencia);
    },
    //metodo de Atualizar
    async atualizar(req, res){
        const frequencia = await Frequencia.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(req.body)
        return res.json(frequencia);
    },
    //metodo atualizar
    async delete(req, res){
        await Frequencia.findByIdAndRemove(req.params.id);
        return res.send();
    },
}