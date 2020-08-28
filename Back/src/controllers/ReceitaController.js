const mongoose = require('mongoose');
const Receita = mongoose.model('Receita');

module.exports={
    //metodo salvar
    async insert (req, res){
        const despesa = await Receita.create(req.body);
        return res.json(despesa);
    },
    //metodo listar
    async index(req, res){
        const{page} = req.query;
        const despesa = await Receita.paginate({}, {page, limit: 500});
        return res.json(despesa);
    },
    //metodo de detalhes
    async detalhes(req, res){
        const despesa = await Receita.findById(req.params.id);
        return res.json(despesa);
    },
    //metodo de Atualizar
    async atualizar(req, res){
        const despesa = await Receita.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(despesa);
    },
    //metodo atualizar
    async delete(req, res){
        await Receita.findByIdAndRemove(req.params.id);
        return res.send();
    },
}