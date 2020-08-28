const mongoose = require('mongoose');
const Despesa = mongoose.model('Despesa');

module.exports={
    //metodo salvar
    async insert (req, res){
        const despesa = await Despesa.create(req.body);
        return res.json(despesa);
    },
    //metodo listar
    async index(req, res){
        const{page} = req.query;
        const despesa = await Despesa.paginate({}, {page, limit: 500});
        return res.json(despesa);
    },
    //metodo de detalhes
    async detalhes(req, res){
        const despesa = await Despesa.findById(req.params.id);
        return res.json(despesa);
    },
    //metodo de Atualizar
    async atualizar(req, res){
        const despesa = await Despesa.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(despesa);
    },
    //metodo atualizar
    async delete(req, res){
        await Despesa.findByIdAndRemove(req.params.id);
        return res.send();
    },
}