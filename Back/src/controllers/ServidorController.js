const mongoose = require('mongoose');
const Servidor = mongoose.model('Servidor');



module.exports = {
    //metodo salvar
    async insert (req, res){
        const publicoAtendido = await Servidor.create(req.body);
        return res.json(publicoAtendido);
    },
    //metodo listar
    async index (req, res){
        const {page} = req.query;
        const publicoAtendido = await Servidor.paginate({}, {page, limit: 5});
        return res.json(publicoAtendido);
    },
    //metodo detalhes
    async detalhes (req, res){
        const publicoAtendido=await Servidor.findById(req.params.id);
        return res.json(publicoAtendido);
    },
    //metodo atualizar
    async atualizar(req, res){
        const publicoAtendido = await Servidor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(publicoAtendido);
    },
    //metodo deletar
    async delete (req, res){
     await Servidor.findByIdAndRemove(req.params.id);
     return res.send();
        }

        
    
        

}