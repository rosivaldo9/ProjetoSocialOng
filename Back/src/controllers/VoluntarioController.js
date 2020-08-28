const mongoose = require('mongoose');
const Voluntario = mongoose.model('Voluntario');


module.exports = {
    //metodo salvar
    async insert (req, res){
        const volutario = await Voluntario.create(req.body);
        return res.json(volutario);
    },
    //metodo listar
    async index (req, res){
        const {page} = req.query;
        const volutario = await Voluntario.paginate({}, {page, limit: 5});
        return res.json(volutario);
    },
    //metodo detalhes
    async detalhes (req, res){
        const volutario=await Voluntario.findById(req.params.id);
        return res.json(volutario);
    },
    //metodo atualizar
    async atualizar(req, res){
        const volutario = await Voluntario.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(volutario);
    },
    //metodo deletar
    async delete (req, res){
     await Voluntario.findByIdAndRemove(req.params.id);
     return res.send();
        }

        
    
        

}