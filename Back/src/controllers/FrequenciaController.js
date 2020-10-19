const mongoose = require('mongoose');
const Frequencia = mongoose.model('Frequencia');

module.exports = {
    //metodo salvar
    async insert(req, res) {
        let result = req.body.filter(async (f) => {
            //verificar se a frequencia com data, aluno e turma passados existe
            let r = await Frequencia.findOne(
                {
                    data: f.data,
                    turma: f.turma,
                    aluno: f.aluno
                })
                //se não existir cria uma nova
            if (r == null) {
                await Frequencia.create(f);
            }

            return r == null
        })

        return res.json(result);
    },
    //metodo listar nome da turma e nome dos alunos presentes
    async index(req, res) {
        const { page } = req.query;
        console.log(req.query);
        const frequencia = await Frequencia.paginate(
            req.query,
            {
                populate: [
                    { path: 'aluno', select: '_id nome' },
                    { path: 'turma', select: '_id nome' }
                ],
                page, limit: 500
            })

        return res.json(frequencia);
    },
    //metodo de detalhes
    async detalhes(req, res) {
        const frequencia = await Frequencia.findById(req.params.id)
        return res.json(frequencia);
    },
    //metodo de Atualizar
    async atualizar(req, res) {
        var frequencia = req.body.filter(async (f) => {
           let obj = await Frequencia.findByIdAndUpdate(f._id, f);
           return obj != null
        })
        console.log(frequencia);
        return res.json(frequencia);
    },
    //metodo atualizar
    async delete(req, res) {
        await Frequencia.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async find(req, res) {
        await Frequencia.findOne({ data: req.params })
    }
}