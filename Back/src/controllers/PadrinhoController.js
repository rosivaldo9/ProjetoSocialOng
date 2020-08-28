const mongoose = require('mongoose');
const Padrinho = mongoose.model('Padrinho');



module.exports = {
    //metodo salvar
    async insert (req, res){
        const padrinho = await Padrinho.create(req.body);
        return res.json(padrinho);
    },
    //metodo listar
    async index (req, res){
        const {page} = req.query;
        const padrinho = await Padrinho.paginate({}, {page, limit: 5});
        return res.json(padrinho);
    },
    //metodo detalhes
    async detalhes (req, res){
        const padrinho=await Padrinho.findById(req.params.id);
        return res.json(padrinho);
    },
    //metodo atualizar
    async atualizar(req, res){
        const padrinho = await Padrinho.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(padrinho);
    },
    //metodo deletar
    async delete (req, res){
     await Padrinho.findByIdAndRemove(req.params.id);
     return res.send();
        },

        
    
        

}